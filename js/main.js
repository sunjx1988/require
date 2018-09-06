require.config({
    baseUrl: "../js",
    paths: {
        "math": "plugin/math",
        "domready": "plugin/domReady",
        "text": "plugin/text",
    }
});

require(["math"], function (math) {
    console.log(math.add(1, 2));
});

//require 的内置插件，当DOM加载完成后
require(['domready!'], function (doc) {
    console.log("called once the DOM is ready");
});

//加载文本\图片的插件
// define(['text!../txt/data.txt'], function (review, cat) {
//         console.log(review);
//         document.body.appendChild(cat);
//     }
// );