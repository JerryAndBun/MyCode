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
	// alert("move函数运行了")
	// alert("在运行了"+isrun)
	isrun = 1
	console.log("目标坐标是" + target)
	console.log(this)
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
			// alert("运行结束")
		}
	}, 10)
}
