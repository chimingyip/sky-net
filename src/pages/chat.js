import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3BhcmtsaW5nLXNpbGVuY2UtNCIsImV4cCI6MTYxNTAyNzI2MH0.Hm8UaUEAI2eAOgpJ6c-BvzFQXlRjWBC6a4xQpsoDDIY';


chatClient.connectUser(
  {
    id: 'sparkling-silence-4',
    name: 'sparkling',
    image: 'https://getstream.io/random_png/?id=sparkling-silence-4&name=sparkling',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'emergency', {
  image: 'https://www.pngkey.com/png/detail/904-9041238_emergency-lighting-fake-news-channel-logo.png',
  name: 'Emergency Messaging',
});

const MyChat = () => (
  <Chat client={chatClient} theme='livestream light'>
    <Channel channel={channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>
);

export default MyChat;