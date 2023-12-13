let myPieChart = document.getElementById('myPieGraph');
let myBarChart = document.getElementById('myBarGraph');
let myLineChart = document.getElementById('myLineGraph');

let trace1 ={};
trace1.type ="pie";
trace1.title ="公立";
trace1.labels =[];
trace1.values =[];
trace1.hole =0.5;
trace1.domain ={
    row:0,
    column:0
};

for(let x=0; x<evaluation_ratio1.length; x++){
    trace1.labels[x] =evaluation_ratio1[x]['name'];
    trace1.values[x] =evaluation_ratio1[x]['count'];
}

let trace2 ={};
trace2.type ="pie";
trace2.title ="私立";
trace2.labels =[];
trace2.values =[];
trace2.hole =0.5;
trace2.domain ={
    row:0,
    column:1
};

for(let x=0; x<evaluation_ratio2.length; x++){
    trace2.labels[x] =evaluation_ratio2[x]['name'];
    trace2.values[x] =evaluation_ratio2[x]['count'];
}

let data1 =[];
data1.push(trace1);
data1.push(trace2);

let layout1 ={
    title: "111學年度大專院校人數比例", 
    margin:{
        t:50,
        l:40,
    },
    grid:{
        rows:2,
        columns:2
    },
    annotations: [
        {
            text: "從圓餅圖可以看到私立就讀學士(含四技)以及進修四技(含進修學士班)的人<br>數比例較多，而公立則是就讀學士(含四技)以及碩士的比例佔大部分，在就<br>讀博士的比例上來看公立的人數較多，而就讀五專的在私立有較大的比例。",
            showarrow: false,
            x: 0.5,  
            y: 0.2, 
            xref: 'paper',
            yref: 'paper',
            xanchor: 'center',
            yanchor: 'top',
            font: {
                size: 14,
                color: 'black'  
            }
        },
    ]
    
}

Plotly.newPlot(myPieChart, data1, layout1);

let trace3 ={};
trace3.type ="bar";
trace3.name ="核定招生名額";
trace3.x =[];
trace3.y =[];
trace3.domain ={
    row:3,
    column:0
}

for(let i=0;i<evaluation_ratio3.length;i++){
    trace3.x[i] =evaluation_ratio3[i]['name'];
    trace3.y[i] =evaluation_ratio3[i]['count'];
}

trace3.text=trace3.y;
trace3.textfont={
    size:15,
    color:'black'
};
trace3.marker={
    color:'skyblue'
}

let trace4 ={};
trace4.type ="bar";
trace4.name ="新生實際註冊人數";
trace4.x =[];
trace4.y =[];
trace4.domain ={
    row:5,
    column:1
}

for(let i=0;i<evaluation_ratio4.length;i++){
    trace4.x[i] =evaluation_ratio4[i]['name'];
    trace4.y[i] =evaluation_ratio4[i]['count'];
}
trace4.text=trace4.y;
trace4.textfont={
    size:15,
    color:'black'
};
trace4.marker={
    color:'pink'
}

let data2 =[];
data2.push(trace3);
data2.push(trace4);

let layout2 ={
    title: "111學年度", 
    margin:{
        t:30,
        l:100,
    },
    grid:{
        rows:2,
        columns:2
    },
    annotations: [
        {
            text: "從長條圖可以看到111學年度不管是公立還是私立新生<br>實際註冊的人數都比核定的招生人數少，尤其是私立的<br>差距更大，從此圖表也可以發現私立的學生數量比公立<br>的多。",
            showarrow: false,
            x: 0.75,  
            y: 1, 
            xref: 'paper',
            yref: 'paper',
            xanchor: 'center',
            yanchor: 'top',
            font: {
                size: 14,
                color: 'black'  
            }
        },
    ]
    
};
Plotly.newPlot(myBarChart, data2, layout2);

let trace5 ={};
trace5.mode ="lines+markers";
trace5.type ="scatter"
trace5.name ="公立";
trace5.x =[];
trace5.y =[];
for(let i=0;i<set1.length;i++){
    trace5.x[i] =set1[i]['0'];
    trace5.y[i] =set1[i]['1'];
}

let trace6 ={};
trace6.mode ="lines+markers";
trace6.type ="scatter"
trace6.name ="私立";
trace6.x =[];
trace6.y =[];
for(let i=0;i<set2.length;i++){
    trace6.x[i] =set2[i]['0'];
    trace6.y[i] =set2[i]['1'];
}

let trace7 ={};
trace7.mode ="markers";
trace7.type ="scatter"
trace7.name ="總計";
trace7.x =[];
trace7.y =[];
for(let i=0;i<set3.length;i++){
    trace7.x[i] =set3[i]['0'];
    trace7.y[i] =set3[i]['1'];
}

let data3 =[];
data3.push(trace5);
data3.push(trace6);
data3.push(trace7);

let layout3 ={
    title: "103~111學年度逐年研究所新生實際註冊人數", 
    margin:{
        t:30,
        b: 150,
    },
    annotations: [
        {
            text: "從折線圖可以看到每年就讀私立研究所的學生遠遠多於公立研究所的學生，然而私立研究所的新生逐年大<br>幅的減少中，而公立研究所的新生微微的增加，從每年學生的總計也可以發現讀研究所的學生慢慢減少。<br><br><br>資料來源:https://ws.moe.edu.tw/001/Upload/15/relfile/7851/87722/2fdc75a2-1374-4234-b3f0-451df318757c.pdf",
            showarrow: false,
            x: 0.5,  
            y: -0.15, 
            xref: 'paper',
            yref: 'paper',
            xanchor: 'center',
            yanchor: 'top',
            font: {
                size: 14,
                color: 'black'  
            }
        },
    ]
}
Plotly.newPlot(myLineChart, data3, layout3);

