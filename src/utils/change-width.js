// 定义宽度拖拽函数的混入对象
export function changeLeftDivWidth(event, strLeft) {
    // console.log(event);
    const startX = event.clientX;
    const offsetX = event.target.offsetLeft; // 元素左边到窗口左边的距离
    const leftDiv = document.getElementById(strLeft); // 左侧盒子
    event.target.setCaptrue; // 设置鼠标捕获(之后的事件捕获会作用在当前元素上)
  
    document.onmousemove = (event) => {
        const endX = event.clientX;
        const width = offsetX - (startX - endX);
        // if (width > minWidth) // 未在这里设置最小宽度，而是通过在组件里min-width设置
        leftDiv.style.width = width + 'px'; // 设置宽度
    }
    document.onmouseup = (event) => {
        document.onmousemove = null;
        document.onmouseup = null;
        event.target.releaseCaptrue;//释放鼠标捕获
    }
}

// 定义宽度拖拽函数的混入对象
export function changeRightDivWidth(event, strRight) {
    const startX = event.clientX;
    const draggedBoxWidth = event.target.offsetWidth; // 拖拽盒子宽度
    const offsetX = document.body.offsetWidth - event.target.offsetLeft; // 元素右到窗口右边的距离
    const rightDiv = document.getElementById(strRight); // 右侧盒子
    event.target.setCaptrue; // 设置鼠标捕获(之后的事件捕获会作用在当前元素上)
  
    document.onmousemove = (event) => {
        const endX = event.clientX;
        const width = offsetX - draggedBoxWidth + (startX - endX); // 去除拖拽盒子宽度
        // if (width > minWidth) // 未在这里设置最小宽度，而是通过在组件里min-width设置
        rightDiv.style.width = width + 'px'; // 设置宽度
    }
    document.onmouseup = (event) => {
        document.onmousemove = null;
        document.onmouseup = null;
        event.target.releaseCaptrue;//释放鼠标捕获
    }
}
