package io.todo.todo.controller.checkdb;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@RestController
public class DatabasePathController {
    @GetMapping("/db-path")
    public String getDatabasePath() {
        try (Connection connection = DriverManager.getConnection("jdbc:h2:file:./data/todos", "sa", "")) {
            return connection.getMetaData().getURL();
        } catch (SQLException e) {
            return "Error: " + e.getMessage();
        }
    }
}
