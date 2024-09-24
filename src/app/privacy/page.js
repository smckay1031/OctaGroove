

export default function Privacy(){
    return(
        <div className="mt-36 px-lg:px-56 md:px-32 px-8">
            <h1 className="text-center text-4xl font-bold py-10">Privacy Policy</h1>
            <p className="italic"> Effective Date: 09/24/2024</p>
            <h2 className="py-8 font-bold text-2xl">1. Introduction</h2>
            <p>Welcome to OctaGroove! This agreement outlines the terms under which you may use our web application (OctaGroove). By accessing or using the App, you agree to the terms set forth in this agreement.</p>
            <h2 className="py-8 font-bold text-2xl">2. Data Usage</h2>
            <h3 className="py-4 font-semibold text-xl">2.1 Data Collection</h3>
            <p>Our App does not collect, store, or share any personal data on external databases. All data retrieved by the App from your Spotify account is used solely for display purposes on your dashboard.</p>
            <h3 className="py-4 font-semibold text-xl">2.2 Data Display</h3>
            <p> The App fetches data such as your top items, recently played songs, playlists, and recommended tracks directly from Spotify’s API. This data is displayed on your dashboard during your session and is not stored or recorded by our servers.</p>
            <h3 className="py-4 font-semibold text-xl">2.3 Authentication</h3>
            <p>We use auth.js for authentication with Spotify to securely connect your Spotify account to the App. The App receives an encrypted token from auth.js, which is stored as a cookie on your device for the duration of your session to use for authentication purposes with auth.js and Spotify servers. This token allows the App to fetch the necessary data from your Spotify account. We do not store or access your authentication token beyond its use in your current session.</p>
            <h2 className="py-8 font-bold text-2xl">3. Data Security</h2>
            <p>The App is designed with security in mind, and we take reasonable measures to protect your data during your session. However, since the App does not store any of your personal data, your data is only as secure as the platform (Spotify) and your device.</p>
            <h2 className="py-8 font-bold text-2xl">4. User Rights</h2>
            <p>Since the App does not collect or store your personal data, there is no data retention or deletion process required. Your Spotify data is fetched in real-time and is not retained after your session ends.</p>
            <h2 className="py-8 font-bold text-2xl">5. Changes to This Agreement</h2>
            <p>We may update this user agreement from time to time. Any changes will be posted within the App, and your continued use of the App after changes are made constitutes your acceptance of the new terms.</p>
            <h2 className="py-8 font-bold text-2xl">6. Contact Us</h2>
            <p>If you have any questions or concerns about this agreement, please contact us at <a>octagroove.contact.gmail.com</a> or throught the <a>Contact</a> page on this site.</p>
        </div>
    )
}