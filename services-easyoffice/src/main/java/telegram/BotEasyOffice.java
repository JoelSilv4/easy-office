package telegram;

import java.text.ParseException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.telegram.telegrambots.ApiContextInitializer;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.meta.exceptions.TelegramApiRequestException;
import trello.Tarefas;

public class BotEasyOffice extends TelegramLongPollingBot {

    SendMessage sendChatMessage = new SendMessage();
    private String saveChatId;
    
    Tarefas t = new Tarefas();
    

    @Override
    public String getBotToken() {
        return "1077364020:AAE6MICtohBqk3uiNjDaFEZ3dmI3z3KlV00";
    }

    @Override
    public void onUpdateReceived(Update update) {
        String chatCommand = update.getMessage().getText();
        Long chatId = update.getMessage().getChat().getId();
        sendChatMessage.setChatId(chatId);

        if (update.getMessage().isCommand() && chatCommand.equals("/tarefas")) {
            saveChatId = chatId.toString();
            try {
                t.getListaTarefas();
            } catch (ParseException ex) {
                System.out.println("DEU BOSTA");;
            }
            sendChatMessage.setText(t.toString());
            System.out.println(saveChatId);
        } else if (update.getMessage().isCommand() && chatCommand.equals("/Test")) {
            saveChatId = chatId.toString();
            sendChatMessage.setText("Funcionou 2");
            System.out.println(saveChatId);
        }

        try {
            execute(sendChatMessage);
        } catch (TelegramApiException e) {
            System.out.println("Error: " + e);
        }
    }

    @Override
    public String getBotUsername() {
        return "cmd_easyoff_bot";
    }

    public String getSaveChatId() {
        return saveChatId;
    }

    public void setSaveChatId(String saveChatId) {
        this.saveChatId = saveChatId;
    }

    public static void main(String[] args) {
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
