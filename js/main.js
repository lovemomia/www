document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/4+"px";

$(function () {
    var header_html = "";
    header_html += "<div class='navbar'>";
    header_html += "<div class='icon'></div>";
    header_html += "<a href='index.html'><div id='index' class='nav'>首<span style='margin-left: 20px'>页</span></div></a>";
    header_html += "<a href='subject.html'><div id='subject' class='nav'>产品服务</div></a>";
    header_html += "<a href='jobs.html'><div id='jobs' class='nav'>招聘信息</div></a>";
    header_html += "<a href='aboutus.html'><div id='aboutus' class='nav'>关于我们</div></a>";
    header_html += "<div style='clear: both;'></div>";
    header_html += "</div>";

    $(".header").html(header_html);
    
    var footer_html = "";
    footer_html += "<div class='footer'>";
    footer_html += "<div class='title'><hr class='left' />联系我们<hr class='right' /></div>";
    footer_html += "<div class='contact'>";
    footer_html += "<div class='mail left'>";
    footer_html += "<img src='img/mail.png' />";
    footer_html += "<h4>邮箱</h4>";
    footer_html += "<p>hr@sogokids.com</p>";
    footer_html += "</div>";
    footer_html += "<div class='phone left'>";
    footer_html += "<img src='img/phone.png' />";
    footer_html += "<h4>电话</h4>";
    footer_html += "<p>021-61280056-8722</p>";
    footer_html += "</div>";
    footer_html += "<div class='address left'>";
    footer_html += "<img src='img/address.png' />";
    footer_html += "<h4>地址</h4>";
    footer_html += "<p>上海市徐汇区古美路1528号A2幢14楼</p>";
    footer_html += "</div>";
    footer_html += "<div style='clear: both;'></div>";
    footer_html += "</div>";
    footer_html += "<div class='copyright'>";
    footer_html += "<p>Copyright©2016 松果亲子, All Rights Reserved。沪ICP备15017382号-3</p>";
    footer_html += "</div>";
    footer_html += "<div style='clear: both;'></div>";
    footer_html += "</div>";

    $("body").append(footer_html);
});