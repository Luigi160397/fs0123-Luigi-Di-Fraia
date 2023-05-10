package esercizio1;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import esercizio1.thread.MyThread;

public class Main1 {
	public static Logger logger = LoggerFactory.getLogger(Main1.class);

	public static void main(String[] args) {
		Thread t1 = new Thread(new MyThread("*"));
		Thread t2 = new Thread(new MyThread("#"));

		t1.start();
		t2.start();

	}

}
