import 'package:app/models/cia_message_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class ChatChannelScreen extends StatefulWidget {
  final String channelName;
  const ChatChannelScreen({Key? key, required this.channelName})
      : super(key: key);

  @override
  State<ChatChannelScreen> createState() => _ChatChannelScreenState();
}

class _ChatChannelScreenState extends State<ChatChannelScreen> {
  final TextEditingController _textEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const MoonAvatar(
              backgroundColor: Color(0xFF3448F0),
              height: 32.0,
              width: 32.0,
              borderRadius: BorderRadius.all(
                Radius.circular(32.0),
              ),
              content: Text(
                "@",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontWeight: FontWeight.w600,
                  fontSize: 12.0,
                  color: Colors.white,
                ),
              ),
            ),
            const SizedBox(
              width: 12.0,
            ),
            Text(
              widget.channelName,
              style: const TextStyle(
                fontFamily: "DMSans",
                fontWeight: FontWeight.w600,
                fontSize: 16.0,
                color: Colors.black,
              ),
            ),
          ],
        ),
      ),
      body: Stack(
        children: [
          ListView(
            padding: EdgeInsets.zero,
            reverse: true,
            children: getMessagesWidgets().reversed.toList(),
          ),
          Column(
            children: [
              const Spacer(),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12.0),
                    border: Border.all(
                      width: 1.0,
                      color: const Color(0xFFE2E2E2),
                    ),
                    color: Colors.white,
                  ),
                  child: Row(
                    children: [
                      const SizedBox(
                        width: 16.0,
                      ),
                      Expanded(
                        child: TextField(
                          controller: _textEditingController,
                          decoration: const InputDecoration(
                            hintText: "Reply...",
                            hintStyle: TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w500,
                              fontSize: 14.0,
                              color: Color(0xFF595D62),
                            ),
                            border: InputBorder.none,
                          ),
                          style: const TextStyle(
                            fontFamily: "DMSans",
                            fontWeight: FontWeight.w500,
                            fontSize: 14.0,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 16.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 12.0),
                        child: Container(
                          width: 36.0,
                          height: 36.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(8.0),
                            color: const Color(0xFFE1EEFE),
                          ),
                          child: IconButton(
                            onPressed: () {},
                            icon: SvgPicture.asset(
                              "assets/share_icon.svg",
                              width: 24.0,
                              height: 24.0,
                              color: const Color(0xFF0578FB),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 16.0,
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Row getMessageWidget(
      String message, bool isUser, bool isFirst, bool isLast, int ind,
      {String sender = ""}) {
    double topLeft, bottomLeft, topRight, bottomRight;
    if (isUser) {
      topLeft = 12.0;
      bottomLeft = 12.0;

      if (isLast) {
        bottomRight = 12.0;
      } else {
        bottomRight = 2.0;
      }

      if (isFirst) {
        topRight = 12.0;
      } else {
        topRight = 2.0;
      }
    } else {
      topRight = 12.0;
      bottomRight = 12.0;

      if (isLast) {
        bottomLeft = 12.0;
      } else {
        bottomLeft = 2.0;
      }

      if (isFirst) {
        topLeft = 12.0;
      } else {
        topLeft = 2.0;
      }
    }

    return Row(
      mainAxisAlignment:
          (isUser) ? MainAxisAlignment.end : MainAxisAlignment.start,
      children: [
        const SizedBox(
          width: 16.0,
        ),
        if (isUser) const SizedBox(width: 64.0),
        Flexible(
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(topLeft),
                bottomRight: Radius.circular(bottomRight),
                topRight: Radius.circular(topRight),
                bottomLeft: Radius.circular(bottomLeft),
              ),
              color:
                  (isUser) ? const Color(0xFF3448F0) : const Color(0xFFE6E9FD),
            ),
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (sender != "")
                    Text(
                      sender,
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w600,
                        fontSize: 12.0,
                        color: (isUser) ? Colors.white : Colors.black,
                      ),
                    ),
                  if (sender != "")
                    const SizedBox(
                      height: 4.0,
                    ),
                  Text(
                    message,
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontWeight: FontWeight.w500,
                      fontSize: 14.0,
                      color: (isUser) ? Colors.white : Colors.black,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        if (!isUser) const SizedBox(width: 64.0),
        const SizedBox(
          width: 16.0,
        ),
      ],
    );
  }

  List<Widget> getMessagesWidgets() {
    List<Widget> messagesWidgets = [
      const SizedBox(
        height: 4.0,
      ),
    ];
    List<CIAMessageModel> messagesList = [
      CIAMessageModel(
        role: "user",
        content: "Hello everyone",
      ),
      CIAMessageModel(
        role: "Restitutor Orbis",
        content: "How's it hanging?",
      ),
      CIAMessageModel(
        role: "Kia Roberts",
        content:
            "Does anyone know of any flutter pub package which works like blocknote of npm?",
      ),
      CIAMessageModel(
        role: "user",
        content: "I don't think there exists one yet, but you can create one!",
      ),
      CIAMessageModel(
        role: "user",
        content: "Let me know if you like a helping hand.",
      ),
    ];

    for (var i = 0; i < messagesList.length; i++) {
      bool isFirst = true;
      bool isLast = true;

      if (i > 0) {
        if (messagesList[i - 1].role == messagesList[i].role) {
          isFirst = false;
        }
      }

      if (i < messagesList.length - 1) {
        if (messagesList[i + 1].role == messagesList[i].role) {
          isLast = false;
        }
      }

      if (messagesList[i].role == "user") {
        messagesWidgets.add(
          getMessageWidget(
            messagesList[i].content,
            true,
            isFirst,
            isLast,
            i,
          ),
        );
      } else {
        messagesWidgets.add(
          getMessageWidget(messagesList[i].content, false, isFirst, isLast, i,
              sender: messagesList[i].role),
        );
      }

      messagesWidgets.add(
        SizedBox(
          height: (isLast) ? 12.0 : 4.0,
        ),
      );
    }

    messagesWidgets.add(
      const SizedBox(
        height: 96.0,
      ),
    );

    return messagesWidgets;
  }
}
