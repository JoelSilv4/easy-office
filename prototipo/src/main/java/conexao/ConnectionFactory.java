package conexao;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Intel
 */
public class ConnectionFactory {

    public Connection getConnection() throws ClassNotFoundException {
        String usuario = "EasyAdm";
        String senha = "#Gfgrupo2";
        String url = "jdbc:sqlserver://svreasyoffice.database.windows.net:1433;database=bdEasyOffice;"
                + "user= " + usuario + "@svreasyoffice;password=" + senha + ";encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            return DriverManager.getConnection(url);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    
    public static void main(String[] args) throws ClassNotFoundException {
        ConnectionFactory a = new ConnectionFactory();
        a.getConnection();
    }
}
