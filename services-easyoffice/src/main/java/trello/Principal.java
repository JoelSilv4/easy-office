package trello;

import java.text.ParseException;
import java.util.Timer;
import java.util.TimerTask;
import org.telegram.telegrambots.ApiContextInitializer;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.exceptions.TelegramApiRequestException;
import telegram.BotEasyOffice;
import telegram.SendTask;

public class Principal {
    public static void main(String[] args) throws ParseException {
        Tarefas t = new Tarefas();
        SendTask st = new SendTask();
        t.getListaTarefas();
        t.exibirMensagem();
        System.out.println(t);
        
        //Timer
        int delay = 0;
        int interval = 900000;

        Timer time = new Timer();

        time.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                st.send(t.mandarAviso());
            }
        }, delay, interval);
        
        
        //Bot
        ApiContextInitializer.init();
        TelegramBotsApi telegram = new TelegramBotsApi();
        BotEasyOffice bot = new BotEasyOffice();

        try {
            telegram.registerBot(bot);
        } catch (TelegramApiRequestException ex) {
            System.out.println("ERRO");         
        }
    }
}
