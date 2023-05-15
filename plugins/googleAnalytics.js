// Include Google Analytics
const googleAnalytics = document.createElement('script')

googleAnalytics.onload = function() {
    window.dataLayer = window.dataLayer || [];
    
    function gtag() {
            dataLayer.push(arguments);
        }
    
    gtag('js', new Date());
    gtag('config', 'G-5N5KD35K89');
}

googleAnalytics.setAttribute(
  'src',
  'https://www.googletagmanager.com/gtag/js?id=G-5N5KD35K89'
);

googleAnalytics.setAttribute(
    'async',
    'true'
  );

document.head.appendChild(googleAnalytics)
