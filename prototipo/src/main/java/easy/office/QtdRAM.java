package easy.office;

import conexao.ConnectionFactory;
import telegram.SendMessage_1;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;

public class QtdRAM {

    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hal = si.getHardware();
    GlobalMemory memoria = hal.getMemory();
    SendMessage_1 a = new SendMessage_1();

    double memoriaTotal = memoria.getTotal() / 1024 / 1024 / 1024 + 1;
    double memoriaDispo = memoria.getAvailable() / 1024 / 1024 / 1024;
    double memoriaUsada = memoriaTotal - memoriaDispo;

    double porcRam = (memoriaUsada * 100) / memoriaTotal;

    public void adiciona() throws ClassNotFoundException {
        telegram();
        Connection connection = new ConnectionFactory().getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        String sql = "INSERT INTO RAM  values (?, ?, ?, ?)";

        try {
            stmt = connection.prepareStatement(sql);
            stmt.setInt(1, 11);
            stmt.setDouble(2, memoriaDispo);
            stmt.setDouble(3, memoriaTotal);
            stmt.setInt(4, 1);
            stmt.execute();
            stmt.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void telegram() {
        if (porcRam > 70) {
            SendMessage_1 a = new SendMessage_1();
            a.send("RAM disponivel: " + memoriaDispo + "GB de " + memoriaTotal + "GB");
        }
    }

    public static void main(String[] args) throws ClassNotFoundException {
        QtdRAM test = new QtdRAM();
        test.adiciona();
    }
}
