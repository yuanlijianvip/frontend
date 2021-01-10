const filter = {
  /* 字数 1,265 100万 1亿 */
  wordsnumber(num) {
    try {
      let float = parseFloat(num || 0);
      if (Number.isNaN(float)) return num;

      let danwei = '';
      if (float >= 100000000) {
        // eslint-disable-next-line
        float = parseInt(float / 100000000); // Math.ceil
        danwei = '亿';
      } else if (float >= 10000) {
        // eslint-disable-next-line
        float = parseInt(float / 10000); //  Math.ceil
        danwei = '万';
      }
      return (
        float.toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,') + danwei
      );
    } catch (e) {
      return '0';
    }
  },
  /* 字数 1,265 100万 1,333.33亿 */
  money(num) {
    try {
      let float = parseFloat(num || 0);
      if (Number.isNaN(float)) return num;

      let danwei = '';
      if (float >= 100000000) {
        float = Math.round(float / 1000000) / 100;
        danwei = '亿';
      } else if (float >= 10000) {
        float = Math.round(float / 10000);
        danwei = '万';
      }
      return (
        (danwei === '亿'
          ? float.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
          : float.toFixed(0)) + danwei
      );
    } catch (e) {
      return '0';
    }
  },
  /** 百分比 0.8 => 80% */
  percentage(num) {
    try {
      // eslint-disable-next-line
      num = parseInt(num * 100);
      return `${num}%`;
    } catch (e) {
      return num;
    }
  },
  /** 时间戳转日期 2019.03.05 */
  date_dot(t) {
    try {
      return new Date(t)
        .toISOString()
        .substr(0, 10)
        .replace(/-/g, '.');
    } catch (e) {
      return t;
    }
  },
  /** 中文日期  */
  date_chinese(time) {
    let date = '';
    const l = new Date().getTime() - time;
    if (l < 0) {
      return '刚刚';
    }
    const day = Math.floor(l / (24 * 60 * 60 * 1000));
    const hour = Math.floor(l / (60 * 60 * 1000) - day * 24);
    const minute = Math.floor(l / (60 * 1000) - day * 24 * 60 - hour * 60);
    if (day > 0) {
      if (day >= 1 && day <= 7) {
        date = `${day}天前`;
      } else {
        date = new Date(time)
          .toISOString()
          .substr(0, 10)
          .replace(/-/g, '.');
      }
    } else if (hour > 0) {
      date = `${hour}小时前`;
    } else if (minute > 0) {
      date = `${minute}分钟前`;
    } else {
      date = '刚刚';
    }
    return date;
  }
};

export default {
  init(vue) {
    // eslint-disable-next-line
    for (let k in filter) {
      vue.filter(k, filter[k]);
    }
  }
};
