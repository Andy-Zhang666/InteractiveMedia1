d3.select("#otter")
.on("click",function()
{
    d3.select("#banner")
    .text("When everyone starts laughing and you have no idea what's going on");
})
d3.select("#caracal")
.on("click",function()
{
    d3.select("#banner")
    .text("Me at Thanksgiving dinner");
})
d3.select("#gecko")
.on("click",function()
{
    d3.select("#banner")
    .text("Me at a dancing party");
})


d3.select("#gecko")
    .on("mouseenter",function()
{
    d3.select("#gecko").text("Let's gooo geckooo");
})

