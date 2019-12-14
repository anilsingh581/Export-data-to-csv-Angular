# Export-data-to-csv-Angular
export data to csv angular

# Installation
npm install --save angular7-csv

# Example

<div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">import</span> { Component, OnInit } from <span style="color: #BA2121">&#39;@angular/core&#39;</span>;
<span style="color: #008000; font-weight: bold">import</span> { AngularCsv } from <span style="color: #BA2121">&#39;angular7-csv/dist/Angular-csv&#39;</span>;


<span style="border: 1px solid #FF0000">@</span>Component({
  selector<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;app-customer&#39;</span>,
  templateUrl<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;./customer.component.html&#39;</span>,
  styleUrls<span style="color: #666666">:</span> [<span style="color: #BA2121">&#39;./customer.component.css&#39;</span>]
})

<span style="color: #008000; font-weight: bold">export</span> <span style="color: #008000; font-weight: bold">class</span> CustomerComponent <span style="color: #008000; font-weight: bold">implements</span> OnInit {

  <span style="color: #008000; font-weight: bold">constructor</span>() {
   }

  dtHolidays :<span style="color: #B00040">any</span>;

  csvOptions <span style="color: #666666">=</span> { 
    fieldSeparator<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;,&#39;</span>,
    quoteStrings<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;&quot;&#39;</span>,
    decimalseparator<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;.&#39;</span>,
    showLabels: <span style="color: #B00040">true</span>, 
    showTitle: <span style="color: #B00040">true</span>,
    title<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;Your Holiday List :&#39;</span>,
    useBom: <span style="color: #B00040">true</span>,
    noDownload: <span style="color: #B00040">false</span>,
    headers<span style="color: #666666">:</span> [<span style="color: #BA2121">&quot;Holiday ID&quot;</span>, <span style="color: #BA2121">&quot;Holiday Date&quot;</span>, <span style="color: #BA2121">&quot;Holiday Comment&quot;</span>,<span style="color: #BA2121">&quot;Holiday Status&quot;</span>]
  };

  ngOnInit() {

    <span style="color: #408080; font-style: italic">//Your data for download in csv file.</span>
    <span style="color: #008000; font-weight: bold">this</span>.dtHolidays <span style="color: #666666">=</span>[
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">101</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;21/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019. &quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">102</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;22/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">103</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;23/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Pending&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">104</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;24/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">105</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;25/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;NotActive&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">106</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;26/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">107</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;27/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Pending&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">108</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;28/02/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">109</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;02/03/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;NotActive&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">110</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;03/04/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>},
      {<span style="color: #BA2121">&quot;id&quot;</span><span style="color: #666666">:</span> <span style="color: #666666">111</span>, <span style="color: #BA2121">&quot;Holiday_Date&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;21/05/2019&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Comment&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;company holiday calendar of 2019.&quot;</span>, <span style="color: #BA2121">&quot;Holiday_Status&quot;</span><span style="color: #666666">:</span> <span style="color: #BA2121">&quot;Active&quot;</span>}
    ];  
  }

  downloadCSV(){
    <span style="color: #408080; font-style: italic">//this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options</span>
    <span style="color: #008000; font-weight: bold">new</span>  AngularCsv(<span style="color: #008000; font-weight: bold">this</span>.dtHolidays, <span style="color: #BA2121">&quot;HolidayList&quot;</span>, <span style="color: #008000; font-weight: bold">this</span>.csvOptions);
  }
}
</pre></td></tr></table></div>

# Angular7Csv (data, filename, options) – The options contains the following properties.
1.      ieldSeparator – It is a field separator character.
2.      quoteStrings – It is double quotes by default. If provided, will use these characters to "escape" fields.
3.      decimalseparator – It is (.) decimal separator by default. If set to "locale", it uses the language sensitive representation of the number.
4.      showLabels – It is false by default. If provided, would use this attribute to create a header row.
5.      showTitle -  It is false by default.
6.      useBom - It is true by default. If true, adds a BOM character at the start of the CSV

7.      noDownload - It is false by default. If true, disables automatic download and returns only formatted CSV

# You should check out the <a href="https://www.code-sample.com/2019/02/angular-7-export-to-csv-pdf-excel.html" target="_blank">docs.</a>
