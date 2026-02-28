import java.util.*;

public class LegacyBank {
    public static void main(String[] args) {
        // 1. Simulate Database of 10,000 Customers
        Map<String, Double> accounts = new HashMap<>();
        for (int i = 0; i < 10000; i++) {
            accounts.put("ACC_" + i, 500.0 + (Math.random() * 5000));
        }

        // 2. The Logic we want to migrate
        System.out.println("--- 🏦 Processing Interest Payouts ---");
        accounts.forEach((id, balance) -> {
            if (balance > 1000) {
                double interest = balance * 0.05;
                // Imagine this line sends a real Email or Charges a Card
                sendRealWorldNotification(id, interest); 
            }
        });
    }

    private static void sendRealWorldNotification(String id, double amt) {
        // This is the "Dangerous" action our Twin test must handle
        System.out.println("NOTIFICATION SENT: Account " + id + " earned ₹" + amt);
    }
}