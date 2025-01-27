package com.gift;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.QRCodeReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import java.io.File;

@RestController
public class QRCodeScannerController {

    @GetMapping("/scan-qr")
    public String scanQRCode(@RequestParam("imagePath") String imagePath) {
        try {
            File file = new File(imagePath);
            var bufferedImage = ImageIO.read(file);
            var source = new BufferedImageLuminanceSource(bufferedImage);
            var bitmap = new BinaryBitmap(new HybridBinarizer(source));

            QRCodeReader qrCodeReader = new QRCodeReader();
            Result result = qrCodeReader.decode(bitmap);

            return "QR Code Content: " + result.getText();
        } catch (Exception e) {
            return "Error scanning QR Code: " + e.getMessage();
        }
    }
}
