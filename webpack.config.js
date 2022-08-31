const path = require ('path');
const webpack = require('webpack');//Это нужно что бы появилась возможность выделить код webpack из кода js файлов (index.js и blog.js), для этого мы будем использовать метод optimize
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');//Этот модуль нужен чтобы в webpack.config.js склеивать различные модули, вместо object.assign - теперь кажыдй модуль можно записать в другой файл (как pug.js) и подключить к webpack.config.js, вместо него можно использовать Object.assign(), но webpack-merge не перезаписывает одноимённые свойства в объединяемых объектах, а дополняет их, а Object.assign - перезаписывает
const pug = require ('./webpack/pug');//Подключаем модуль с pug для webpack.config.js ,кстати можно не указывать .js webpack и так всё понимает
const pages= require(`./webpack/pages`);//Тут хранится массив страничек
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');//Напомню, что сами стили(допустим blog.scss) нужно подключать через соответствеющие js файлы (blog.js)
const css = require('./webpack/css');//Модуль для обработки файлов .css напомню что такие файлы нужно подключать особо в каждый соответствующий js файлы (к примеру для index.html нужно подключать в index.js)
const extractCss = require('./webpack/css.extract');//Модуль для извлечения стилей в отдельный(ые) файл(ы) и дальнейшего подключения к проекту
const images = require('./webpack/images');//Модуль, который обрабатывает изображения
const fonts = require('./webpack/fonts');
const files = require('./webpack/files');

const PATHS = {//Объект с двумя свойствами
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common= merge([//модуль merge -  заменяет метод Objects.assign т.к. он более наглядный, мы просто передаём массив объектов, которые нужно склеить.
	{//Первый объект
		mode:'',//Специально не корректно инициализируем параметр mode, т.к. его мы будем инициализировать в последнюю очередь см функцию module.exports
		entry: pages.reduce((config,page)=>{//reduce перебирает все значения массива и в каждой итерации может использовать значение из предыдущей итерации. Возвращает массив.
      config[page] = `${PATHS.source}/pages/${page}/${page}.js`;//Обрати внимание для кадой страницы мы создаём свою точку входа которая начинается с .js файла
      return config;
    },{}),//вторым аргументом reduce является первоначальной значение т.е. изначально config = {}, а затем этот объект наполняется свойствами, которые содержат адреса страниц
		// entry: {
		// 	'index': PATHS.source + '/pages/index/index.js',//Обрати внимание для кадой страницы мы создаём свою точку входа которая начинается с .js файла
		// },
		output: {
			path: PATHS.build,//Устанавливаем путь, куда мы будем пихать наши обработанные файлы
			publicPath: '/',//Устанавливаем путь, куда будет смотреть node сервер(да и наверное остальные) в данном случае он будет смотреть в localhost:8080(или другой порт это не важно)  и если ты указал изображение в images он будет смотреть в localhost:8080/images/menu.png а не в css/images/menu.png т.к. menu.png цепляется через menu.scss который складируется в css/ поэтому путь будет относительно css но public path это меняет чтобы webpack смотрел в корень сервера
			filename: 'js/[name][contenthash].js',//[name]  - плэйхолдер, в него будут автоматически подставляться имена точек входа
			assetModuleFilename: "assets/[hash][ext][query]",//Все ресурсы помеченные как type:'asset', или type: 'asset/resource' будут сохраняться теперь в папку assets в папке build
			clean: true,
		},
		plugins:[
			// new HtmlWebpackPlugin({// создаём страничку html
			// 	filename:'index.html',//Задаём имя генерируемому файлу
			// 	chunks: ['index', 'common'],//Добавляет на страницу только те файлы, которые начинаются с index (допустим index.js index.css даже несмотря на то что они находятся в отельных папках css/ и js/)
			// 	template: PATHS.source + '/pages/index/index.pug'//в данный плагин мы передадим шаблон разметки pug но сразу же скомпилированную (pug-loader'oм), проще говоря плагин сверстает страницу изходя из разметки, которую ему предоставит pug плагин (см он подключени ниже) после обработки этого шаблона
			// }),
			new webpack.ProvidePlugin({//Этот плагин позволяет отказаться от import в модулях с кодом, т.е. когда webpack будет смотреть в код и найдёт допустим $ он автоматически подключит jquery, в соотвествии с настройками которые ты установишь в этом модуле
				$: 'jquery',//Если будет найден $ он автоматически подключит jquery, jquery должен быть установленн npm i jquery т.е. можно не писать в коде import jquery
				jQuery: 'jquery'
			})
		].concat(
      pages.map(
	          (page)=>{
              return new HtmlWebpackPlugin({
                template:  `${PATHS.source}/pages/${page}/${page}.pug`,
                filename:  `${page}.html`,
                chunks: [page],//Эта запись выбирает повторяющиеся зависимости из файлов и выписывает его в отдельный файл, к томуже Добавляет на страницу только те файлы, которые начинаются с index (допустим index.js index.css даже несмотря на то что они находятся в отельных папках css/ и js/)
            })
          }
	      )
      ),
		optimization:{
			splitChunks:{
				chunks: 'all',//Указывает какие чанки (модули с используемым кодом) будут оптимизироваться (удалятся повторяющийся код и выносится в другой файл), возможные значения 'all'(проверяет все чанки) 'async'(Проверяет только асинхронные) 'initial'
				name: 'common'//Файлы с общим кодом будут называться common.js и common.css, если имя не написать, то там будет vendor~index~blog.js или (css) 
			}
		},
		devtool:'eval',//этот параметр отвечает за создание source-map их может быть несколько я специально не корректно инициализируем этот параметр , т.к. его мы будем инициализировать в последнюю очередь см функцию module.exports
	},
	pug(),//Второй объект, pug(т.к. это объект, то для этого мы используем merge, который у нас инициализирван файлом (см выше в самом начале), в котором есть описание этого плагина
	images(),
	files(),
	fonts()
]);

module.exports = function(env,argv){
	//Напомню что mode:production автоматически минифицирует код.
	common.mode = argv.mode;//Инициализируем режим development или prodaction в объекте common чтобы webpack знал как собирать проект, если эту строку убрать, то консоль выдаст ошибку, т.к. объект common инициализировани не в соотвествии с API webpack'a(т.к. там некорректно инициализирован ключ mode)
	console.log(`Знаешь ли ты, что mode = ${argv.mode}`);
	if (argv.mode === 'production'){// argv.mode - параметр который передаётся в npm scripts - загляни в package.jsone
		common.devtool = false;//сорсмап создаваться не будет
		common.output.publicPath = "./"; //Указываем нормальный пукть, чтобы сборка была человеческой
		return merge([
			common,
			extractCss(),//Отделяем файлы стилей в продакшене, хотя ничто не мешает это делать в common(т.е. всегда), напоминаю этот модуль заменяет собой style-loader, т.е. теперь стили не будут писаться инлайно в html файле, а будут вынесены в отдельный файлик.
		])
	}
	if (argv.mode === 'development'){
		common.devtool = 'source-map';//Будет создаваться сорсмап, это значит, что когда ты вызовешь инструмент разработчика в браузере и посмотрищь на свойства элемента, то там будет прописанно, в каком конкретно файле прописанно это свойства, если не указать сорсмап, то все свйоства будут храниться в inline, т.к. в режиме разработки мы сохраняем их туда.
		return merge([//модуль merge -  заменяет метод assign см выше в комменатриях , т.к. он более наглядный, мы просто передаём массив объектов, которые нужно склеить.
			common,//Второй и третий аргументы - объекты которые должны быть склеены
			devserver(),//Подключаем модуль devserver, который у нас инициализирван файлом (см выше в самом начале), в котором есть описание этого плагина
			sass(),
			css(),
		])
	}

};