package Trello;

import java.text.ParseException;

public class Principal {
    public static void main(String[] args) throws ParseException {
        Tarefas t = new Tarefas();
        t.getListaTarefas();
        t.exibirMensagem();
    }
}
