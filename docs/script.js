var f =new Date();
month=f.getMonth()+1;
if( f.getDate()==24 && month==12){
    document.writeln("<h1>Happy Christmas Eve /Feliz Noche Buena</h1>");
}
if(f.getDate()==25 && month==12){
    document.writeln("<h1>Happy Christmas/Feliz Navidad</h1>");
}
document.writeln("<h1>Happy Holidays</h1>");