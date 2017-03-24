/*
* @Author: diaoqi
* @Date:   2017-02-22 15:16:13
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-02-22 15:20:44
*/

/*                   
*                    
*                    本文档用于学习Echarts中的各种属性与方法
*                    
*/

//柱状图bar1
require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });

        require(
            [
                'echarts',
                'echarts/theme/macarons',  //设置主题
                'echarts/chart/bar',   // 使用柱状图就加载bar模块，按需加载
                'echarts/chart/line'
            ],
            function (ec,theme) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('bar1'),theme); 
                
                var option = {
                    title : {
                        text: '考点：集合 大数据得分率对照表',
                        subtext: '2017',
                        x: "center", //标题水平方向位置
                        textStyle:{
                            color: "black",
                            fontSize: 16
                        }
                    },
                    tooltip: { //悬浮窗设置

                        trigger: 'axis',
                        //悬浮窗口移动的样式，可以改为show:true 没有样式
                        axisPointer : {      
                            // 坐标轴指示器，坐标轴触发有效  
                            type : 'shadow'      // 默认为直线，可选为：'line' | 'shadow'  
                        }
                        //formatter: "学校{c}人<br/>联考{ }人"      // 自定义悬浮窗显示内容
                    },
                    legend: { //图例
                        data:[ {name: '2017年应届得分率',  textStyle:{}  },'2012-2016得分率'],//上部分显示的，也代表一组数据
                        x: "center",  //图例的位置
                        y:"bottom",
                        orient: 'horizontal',//图例是否垂直放置。可选：'horizontal' 'vertical'
			            padding:[0, 0, 0, 50],//说明距各边的距离
                        calculable : true //不知道干什么的
                    },
                    grid: {  //网格
                        //left: '10',  
                        //right: '600',  
                        //bottom: '80%',  
                        //top: '20%',    
                        //height: '60%', 
                    },
                    xAxis : [//X轴设置
                        {
                            type : 'category',//翻译：分类
                            // axisLabel : {   //坐标轴的自定义文本
                			// 	formatter: '{value}分'
            				// },
                            data : ["全省","豫南九校","中原名校","省一本","名校一本","九校一本","省培优生","九校培优","名校培优"],
                            boundaryGap : true,//文字是否在两条线之间
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',//因变量c
                            // axisLabel : {
             				// 	formatter: '{value} 人'
          					// }
                        }
                    ],
                    series : [
                        {
                            "name":"2017年应届得分率",//与上面呼应，表示一组数据
                            "type":"bar",
                            "data":[0.259, 0.535, {value: 0.458,itemStyle:{ normal:{color:'#2EC7C9'} } }, 0.572, 0.963, 0.613, 0.957, 0.114, 0.827],
                            itemStyle: {
                                normal: {
                                    barBorderRadius:[5, 5, 0, 0]
                                }
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            "name":"2012-2016得分率",//与上面呼应，表示一组数据
                            "type":"bar",
                            "data":[0.322, 0.118, 0.310, 0.144, 0.392, 0.294, 0.461, 0.248, 0.917],
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            },
                            itemStyle: {
                                normal: {
                                    barBorderRadius:[5, 5, 0, 0]
                                }
                            }
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );




//折线图 line1
require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });

        require(
            [
                'echarts',
                'echarts/theme/macarons',//设置主题
                'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
                'echarts/chart/line'
            ],
            function (ec,theme) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('line1'),theme); 
                
                var option = {
                    title : {
                        text: '考点：考点1 集合',
                        subtext: '2017',
                        x: "center", //标题水平方向位置
                        textStyle:{
                            color: "black",
                            fontSize: 16
                        }
                    },
                    tooltip: { //悬浮窗设置

                        trigger: 'axis',
                        //悬浮窗口移动的样式，可以改为show:true 没有样式
                        //formatter: "学校{c}人<br/>联考{ }人"
                        // 自定义悬浮窗显示内容
                        axisPointer : {      
                            // 坐标轴指示器，坐标轴触发有效  
                            type : 'line'      // 默认为直线，可选为：'line' | 'shadow'  
                        }
                    },
                    legend: {
                        data:[
                            {name: '2017年应届得分率',  textStyle:{color:"#2EC7C9"}  },
                            {name: '2012-2016得分率',  textStyle:{color:"#B6A2DE"}  }],//上部分显示的，也代表一组数据
                        x: 'center',  // "说明" 的位置
                        y:"bottom",
                        //orient: 'vertical',// "说明" 垂直或者水平
                        calculable : true //不知道干嘛的
                    },
                    grid: {  //网格
                        //left: '10',  
                        //right: '600',  
                        //bottom: '80%',  
                        //height: '60%',    
                        //top: '20%',  
                        containLabel: true  
                    },
                    xAxis : [//X轴设置
                        {
                            type : 'category',//翻译：分类
                            // axisLabel : {   //坐标轴的自定义文本
                			// 	formatter: '{value}分'
            				// },
			    axisLine:{  
                                lineStyle:{  
                                    //color:'yellow',  
                                    width:2  
                                }  
                            },
                            //splitLine: {lineStyle:{color:'red'}},   //横轴上的竖线的样式
                            data : ["全省","豫南九校","中原名校","省一本","名校一本","九校一本","省培优生","九校培优","名校培优"],
                            boundaryGap : false,//文字是否在两条线之间
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',//因变量c
                            // axisLabel : {
             				// 	formatter: '{value} 人'
          					// }
                        }
                    ],
                    series : [
                        {
                            name:"2017年应届得分率",//与上面呼应，表示一组数据
                            type:"line",
                            symbolSize: 3,
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            },
                            itemStyle:{
                                normal:{
                                    color: "#2EC7C9"
                                }
                            },
                            data:[0.21, 0.31, 0.25, 0.33, 0.22, 0.23, 0.20, 0.30, 0.37],
                            //itemStyle: {normal: {areaStyle: {type: 'default'}}}
                        },
                        {
                            name:"2012-2016得分率",//与上面呼应，表示一组数据
                            type:"line",
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            },
                            itemStyle:{
                                normal:{
                                    color: "#B6A2DE"
                                }
                            },
                            data:[0.51, 0.61, 0.55, 0.53, 0.62, 0.53, 0.60, 0.51, 0.45],
                            //itemStyle: {normal: {areaStyle: {type: 'default'}}}
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );