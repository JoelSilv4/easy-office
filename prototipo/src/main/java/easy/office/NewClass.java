/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package easy.office;

import conexao.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Zed
 */
public class NewClass {

    public void Maquinas() throws ClassNotFoundException {

        Connection connection = new ConnectionFactory().getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;

        String sql = "SELECT * FROM COMPUTADOR";
        try {
            stmt = connection.prepareStatement(sql);

            rs = stmt.executeQuery();

            while (rs.next()) {             
                System.out.println(rs.getInt("idMaquina"));

            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    public static void main(String[] args) throws ClassNotFoundException {
        NewClass a = new NewClass();
        a.Maquinas();
    }
}
