let URl = 'http://localhost:8081';
let projectName = '/mistletoe';

function myAjax(url, data, type,processData,contentType) {
    // data.append("loginName",sessionStorage.getItem("username"))
    let result = null;
    // console.log(typeof data, 'myAjaxUrl');
    $.ajax({
        url: URl + url,
        data: data,
        // data: JSON.stringify(data),
        type: type,
        async: false,
        processData: processData,
        contentType: contentType,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        dataType: 'json',
        success: function (data) {//success方法是请求成功后返回的html数据。
            result = data

        }
    })
    return result;
}

/*通用*/

/*美化*/
function toNull(value) {
    return value == undefined ? '暂无数据' : value;
}

/*日期位数截取*/
function getDate(value) {
    return value == undefined ? '数据缺失' : value.split(" ")[0];
}


/**
 * \
 * @param url
 * @param data
 * @returns {null}
 */
function myPostAjax(url,data) {
    let BackUrl="http://localhost:8081/"
    let result=null;
    $.ajax({
        url: BackUrl+url,
        data: JSON.stringify(data),
        async:false,//同步=关掉异步
        // headers:{
        //     ContentType:"application/json;charset=UTF-8"
        // },
        contentType: 'application/json;charset=UTF-8',
        type: "post",
        dataType: 'json',
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success: function (data) {
            result = data;
        }
    })
    return result;
}
