//导入vue
import Vue from 'vue'
import annotator from  '../../node_modules/annotator';
Vue.use(annotator)

function helloWorld() {
    return {
        start: function (app) {
            app.notify("Hello,Reviewer");
        }
    };
}

//首先实例化一个对象 app 包含一些 annotator里的API  
var app = new annotator.App();
app.include(annotator.ui.main);
app.include(helloWorld);
app.include(annotator.storage.debug);
app.start().then(function () {
    app.annotations.load();
});

export default app
