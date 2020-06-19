package Trello;

import java.util.Calendar;
import java.util.Date;

public class Data {
    Calendar dataAtual = Calendar.getInstance(); 
    public Integer diaAtual = dataAtual.get(Calendar.DAY_OF_MONTH);
    public Integer mesAtual = dataAtual.get(Calendar.MONTH) + 1;
    public Integer anoAtual = dataAtual.get(Calendar.YEAR);
    
    public String getDataAtual(){
        return (diaAtual + "/" + mesAtual + "/" + anoAtual);
    }
            
     public Calendar dataParaCalendar(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar;
    } 
}
