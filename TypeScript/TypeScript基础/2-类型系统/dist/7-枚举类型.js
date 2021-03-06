// 枚举类型
// 枚举的作用组织收集一组关联数据的方式，通过枚举我们可以给一组有关联意义的数据赋予一些友好的名字
// 注意事项：
// key 不能是数字
// value 可以是数字，称为 数字类型枚举，也可以是字符串，称为 字符串类型枚举，但不能是其它值，默认为数字：0
// 枚举值可以省略，如果省略，则：
//   1.第一个枚举值默认为：0
//   2.非第一个枚举值为上一个数字枚举值 + 1
// 枚举值为只读（常量），初始化后不可修改
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
})(HTTP_CODE || (HTTP_CODE = {}));
;
HTTP_CODE.OK;
// HTTP_CODE.OK = 1;
// 字符串类型枚举
// 枚举类型的值，也可以是字符串类型
// 注意：如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值
// 小技巧：枚举名称可以是大写，也可以是小写，推荐使用全大写（通常使用全大写的命名方式来标注值为常量）
var USER;
(function (USER) {
    USER["USER_REGISETER"] = "/user/register";
    USER["USER_LOGIN"] = "user/login";
    //如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值
    USER[USER["INDEX"] = 1] = "INDEX";
})(USER || (USER = {}));
USER.USER_LOGIN;
