			window.onload = function() {
				var body_emlemt=document.getElementsByTagName("body")[0].childNodes
				// alert(body_emlemt.length)
				function getStyle(obj, name) {
					if (window.getComputedStyle) {
						return getComputedStyle(obj, null)[name]
					} else {
						return obj.currentStyle[name]
					}
				}
				// move函数 
				//obj:要执行函数的对象
				// attr：要执行动画的样式，比如left height width
				// target:要执行动画的目标位置
				// speed：移动的速度
				// callback：回调函数将会在动画执行完毕后执行
				function move(obj, attr, target, speed, callback) {
					isrun = 1
					console.log("目标坐标是" + target)
					// console.log(this)
					clearInterval(obj.timer)
					var current_left_value = parseInt(getStyle(obj, attr)) //获取imglist距离左边的距离
					if (current_left_value > target) {
						speed = -speed
					}
					obj.timer = setInterval(function() {
						var oldvalue = parseInt(getStyle(obj, attr))
						var newvalue = oldvalue + speed
						if (speed < 0 && newvalue < target || speed > 0 && newvalue > target) {
							newvalue = target
						}
						obj.style[attr] = newvalue + 'px'
						if (newvalue == target) {
							clearInterval(obj.timer)
							callback && callback(); //有才执行回调函数
							isrun = 0
						}
					}, 10)
				}

				// 以下是图片ul根据图片数量自动增加的代码
				//
				var imglist = document.getElementById("middle-banner-ul");
				var imgarr = document.getElementsByClassName("banner_rotate");
				imglist.style.width = imgarr.length * 600 + 'px';
				imglist.style.left = -0 + 'px';
				imglist.length = imgarr.length //给imglist赋值长度
				//
				// 以下是右侧固定条的代码
				//
				var slidebar = document.getElementById('fixed-box');
				var backtotop = document.getElementsByClassName('fixed-li-last');
				var welcome_box = document.querySelector('.welcome-box')
				document.addEventListener('scroll', function() {
					if (window.pageYOffset >= 180) {
						slidebar.style.position = 'fixed';
					} else {
						slidebar.style.position = 'absolute';
					}
					if (window.pageYOffset >= 270) {
						backtotop[0].style.display = 'block'
					} else {
						backtotop[0].style.display = 'none'
					}
				})
				//
				// 一下是移入banner图左右出现箭头的代码
				//
				var banner_box = document.querySelector('.middle-banner-box')
				var button_l = document.querySelector('.recommend-left-button')
				var button_r = document.querySelector('.recommend-right-button')
				banner_box.addEventListener('mouseenter', function() {
					button_l.style.display = 'block'
					button_r.style.display = 'block'
				})
				banner_box.addEventListener('mouseleave', function() {
					button_l.style.display = 'none'
					button_r.style.display = 'none'
				})
				/**
				 * 以下是自动切换的代码
				 */
				autochange()
				var timer2
				function autochange() {
					timer2 = setInterval(function() {
						index++
						move(imglist, "left", -600 * index, 20, check)
					}, 3000)
				}
				//
				// 图片点击切换的代码
				//
				var isrun = 0
				var index = 1 //图片的索引
				imglist.style.left = -600 + 'px'
				button_l.addEventListener('click', function() {
					if (isrun) {
						return 0
					}
					index--
					move(imglist, "left", -600 * index, 20, check)
				})
				button_r.addEventListener('click', function() {
					if (isrun) {
						return 0
					}
					index++
					move(imglist, "left", -600 * index, 20, check)
				})

				var dots = document.querySelectorAll('.banner-point>li')
				dots[index - 1].style.border = '3px solid rgba(255, 255, 255, .8)' //默认是第一（index）个被选中
				function dotschange() {
					for (var i = 0; i < dots.length; i++) {
						dots[i].style.border = '2px solid transparent'
					}
					console.log(index)
					dots[index - 1].style.border = '3px solid rgba(255, 255, 255, .8)'
				}
				//
				// 鼠标点击悬浮dots改变样式
				//
				for (var k = 0; k < dots.length; k++) {
					dots[k].onmouseover = function() {
						clearInterval(timer2)
						index = this.num + 1
						move(imglist, "left", -600 * index, 20, check)
					}
					// dots[k].onmouseleave = function() {
					// 	autochange()
					// }
				}
				for (var i = 0; i < dots.length; i++) {
					dots[i].num = i
					dots[i].onclick = function() {
						clearInterval(timer2)
						index = this.num + 1
						move(imglist, "left", -600 * index, 20, check)
					}

				}
				// 
				// 检查函数
				//
				var banner_box = document.querySelector('.middle-banner-box')
				banner_box.onmouseover = function() {
					// alert("移入了")
					clearInterval(timer2)
				}
				banner_box.onmouseout = function() {
					autochange()
				}
				function check() {
					if (index == 0) {
						index = 4
						imglist.style.left = '-2400px'
					}
					if (index == 5) {
						index = 1
						imglist.style.left = '-600px'
					}
					dotschange(index)
				}

			}