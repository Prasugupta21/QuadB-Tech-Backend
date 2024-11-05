import React from "react";

function ConnectTelegram() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Connect Telegram</h1>

        {/* Add Bot to Group Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add Bot to Your Group</h2>
          <h3 className="font-semibold text-gray-700">Manual:</h3>
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>Open the Telegram app.</li>
            <li>Open the group you want to add the bot to.</li>
            <li>Click on "Add Members" in group settings.</li>
            <li>Search <span className="font-semibold">@HodlInfoBot</span> and click it.</li>
          </ol>
          <h3 className="font-semibold text-gray-700">Automatic:</h3>
          <p className="text-blue-500 underline">
            <a href="https://t.me/HodlInfoBot?startgroup=true" target="_blank" rel="noopener noreferrer">
              Go to: https://t.me/HodlInfoBot?startgroup=true
            </a>
          </p>
        </section>

        {/* Chat with Bot Section */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Chat with the Bot</h2>
          <h3 className="font-semibold text-gray-700">Manual:</h3>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Open the Telegram app.</li>
            <li>Click on the "New Message" button.</li>
            <li>In the search bar, type <span className="font-semibold">HodlInfoBot</span>.</li>
            <li>Click on <span className="font-semibold">@HodlInfoBot</span>.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default ConnectTelegram;
