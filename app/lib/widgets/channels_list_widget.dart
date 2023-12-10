import 'package:app/screens/chat_channel_screen.dart';
import 'package:app/screens/explore_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class ChannelsListWidget extends StatelessWidget {
  const ChannelsListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 8.0),
            child: Text(
              "Channels",
              style: TextStyle(
                fontFamily: "DMSans",
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Color(0xFF595D62),
              ),
            ),
          ),
          const SizedBox(
            height: 8.0,
          ),
          InkWell(
            onTap: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) => ExploreScreen(
                    channelName: "general",
                    localCommunity: "Coding Club, MIT",
                  ),
                ),
              );
            },
            child: Ink(
              child: MoonMenuItem(
                menuItemPadding: const EdgeInsets.only(top: 2.0),
                title: const Padding(
                  padding: EdgeInsets.only(left: 12.0),
                  child: Text(
                    "general",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ),
                leading: Padding(
                  padding: const EdgeInsets.only(left: 8.0),
                  child: Container(
                    height: 24.0,
                    width: 24.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4.0),
                      border: Border.all(
                        color: const Color(0xFFD9D9D9),
                        width: 1.0,
                      ),
                    ),
                    child: const Center(
                      child: Text(
                        "#",
                        style: TextStyle(
                          fontFamily: "DMSans",
                          fontSize: 10,
                          fontWeight: FontWeight.w700,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ),
                ),
                trailing: Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Container(
                    height: 24.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(999.0),
                      color: const Color(0xFFE1EEFE),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: 12.0,
                        vertical: 4.0,
                      ),
                      child: Text(
                        "03",
                        style: TextStyle(
                          fontFamily: "DMSans",
                          fontSize: 12,
                          fontWeight: FontWeight.w600,
                          color: Color(0xFF0578FB),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          InkWell(
            onTap: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) => const ChatChannelScreen(
                    channelName: "bug-fixes",
                  ),
                ),
              );
            },
            child: Ink(
              child: MoonMenuItem(
                menuItemPadding: const EdgeInsets.only(top: 2.0),
                title: const Padding(
                  padding: EdgeInsets.only(left: 12.0),
                  child: Text(
                    "bug-fixes",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ),
                leading: Padding(
                  padding: const EdgeInsets.only(left: 8.0),
                  child: Container(
                    height: 24.0,
                    width: 24.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4.0),
                      border: Border.all(
                        color: const Color(0xFFD9D9D9),
                        width: 1.0,
                      ),
                    ),
                    child: const Center(
                      child: Text(
                        "@",
                        style: TextStyle(
                          fontFamily: "DMSans",
                          fontSize: 10,
                          fontWeight: FontWeight.w700,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ),
                ),
                trailing: Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Container(
                    height: 24.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(999.0),
                      color: const Color(0xFFE1EEFE),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: 12.0,
                        vertical: 4.0,
                      ),
                      child: Text(
                        "01",
                        style: TextStyle(
                          fontFamily: "DMSans",
                          fontSize: 12,
                          fontWeight: FontWeight.w600,
                          color: Color(0xFF0578FB),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          const ChannelWidget(
            channelName: "bangalore",
            isPostChannel: true,
          ),
          const ChannelWidget(
            channelName: "cyber-security",
            isPostChannel: true,
          ),
          const ChannelWidget(
            channelName: "freelancing",
            isPostChannel: false,
          ),
          const ChannelWidget(
            channelName: "alum23",
            isPostChannel: true,
          ),
          const ChannelWidget(
            channelName: "all-alum",
            isPostChannel: true,
          ),
          const SizedBox(
            height: 8.0,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 4.0),
            child: MoonButton(
              onTap: () {},
              height: 40.0,
              width: double.infinity,
              backgroundColor: const Color(0xFFE1EEFE),
              label: const Text(
                "Discover Channels",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF0578FB),
                ),
              ),
              leading: SvgPicture.asset(
                "assets/compose_icon.svg",
                height: 24.0,
                width: 24.0,
                color: const Color(0xFF0578FB),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ChannelWidget extends StatelessWidget {
  final bool isPostChannel;
  final String channelName;
  const ChannelWidget({
    super.key,
    this.isPostChannel = false,
    required this.channelName,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        if (isPostChannel) {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => ExploreScreen(
                channelName: channelName,
                localCommunity: "Coding Club, MIT",
              ),
            ),
          );
        } else {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => ChatChannelScreen(
                channelName: channelName,
              ),
            ),
          );
        }
      },
      child: Ink(
        child: MoonMenuItem(
          menuItemPadding: const EdgeInsets.only(top: 2.0),
          title: Padding(
            padding: const EdgeInsets.only(left: 12.0),
            child: Text(
              channelName,
              style: const TextStyle(
                fontFamily: "DMSans",
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Colors.black,
              ),
            ),
          ),
          leading: Padding(
            padding: const EdgeInsets.only(left: 8.0),
            child: Container(
              height: 24.0,
              width: 24.0,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4.0),
                border: Border.all(
                  color: const Color(0xFFD9D9D9),
                  width: 1.0,
                ),
              ),
              child: Center(
                child: Text(
                  (isPostChannel) ? "#" : "@",
                  style: const TextStyle(
                    fontFamily: "DMSans",
                    fontSize: 10,
                    fontWeight: FontWeight.w700,
                    color: Colors.black,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
