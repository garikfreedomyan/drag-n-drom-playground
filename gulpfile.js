const gulp = require('gulp');							//Подключаем Gulp
const browserSync = require('browser-sync').create();	//Подключаем BrowserSync (Нужен для того чтобы создать локальный сервер и автоматической перезагрузки страницы)
const plumber = require('gulp-plumber');				//Подключаем Plumber (Нужен для вывода ошибок в терминал)



gulp.task('style', function () {
	return gulp.src('./app/style.css')
		.pipe(plumber())
		.pipe(browserSync.stream())
});

gulp.task('script', function () {
	return gulp.src('./app/script.js')
		.pipe(browserSync.stream())
});


gulp.task('serve', gulp.series(gulp.parallel('style', 'script'), function() {
    browserSync.init({
        server: "./app/",
        notify: false
    });

    gulp.watch("app/style.css", gulp.series('style'));
    gulp.watch("app/script.js", gulp.series('script'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));




/*
npm i - установка всех связаных плагинов для работы GULP (Инициализация)

npm i gulp -g - установка GULP глобально (i - install, -g - global)

npm i 'название плагина без ковычек'  --SD(Сокаращение "--save-dev") установка плагина в рамках проекта


return gulp.src("ПУТЬ") - выборка исходных файлов проекта для обработки плагином;
.pipe(plugin_name()) - вызов Gulp плагина для обработки файла;
.pipe(gulp.dest('ПУТЬ')) - вывод результирующего файла в папку назначения (dest - пункт назначения).



*.sass - выбирает все файлы, имеющие определенное расширение (в данном случае, .sass) в корневой папке проекта.

**//*.js - (Без двойного слеша)выбирает все файлы с расширением .js во всех папках проекта.

!header.sass - исключает файл из общей выборки

*.+(scss|sass) - задает комплексный шаблон для нескольких типов файлов, разделенных вертикальной чертой. 
В данном примере в выборку попадут любые sass и scss файлы в корне проекта.



Обратите внимание, что файлы sass, которые предназначены для импорта в другие файлы, как части одного общего, 
начинаются с нижнего подчеркивания _part-1.sass. Такие файлы не учавствуют в компиляции, как отдельные файлы, 
а добавляются через @import в основные файлы.

*/