package com.example.apple.newsweb;

import android.content.Intent;
import android.net.Uri;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Created by apple on 17/6/28.
 */

public class MyAppWebViewClient extends WebViewClient {

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        /*
        if (Uri.parse(url).getHost().endsWith("120.24.57.3/triNewsCrawler/web")) {
            return false;
        }


        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
        view.getContext().startActivity(intent);
        return true;
        */
        view.loadUrl(url);
        return true;
    }
}
