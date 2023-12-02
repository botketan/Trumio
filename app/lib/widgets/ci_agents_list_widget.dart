import 'package:app/widgets/ci_agent_window_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class CIAgentsListWidget extends StatelessWidget {
  const CIAgentsListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding:
              const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            children: [
              SvgPicture.asset(
                "assets/chat_icon.svg",
                width: 16.0,
                color: const Color(0xFF595D62),
              ),
              const SizedBox(
                width: 4.0,
              ),
              const Text(
                "Your Go-To Expert Agents",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontWeight: FontWeight.w500,
                  fontSize: 14.0,
                  color: Color(0xFF595D62),
                ),
              ),
              const Spacer(),
              MoonTextButton(
                onTap: () {},
                height: 24.0,
                label: const Text('View All',
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontWeight: FontWeight.w600,
                      fontSize: 12.0,
                      color: Color(0xFF4E46B4),
                    )),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(4.0),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(
          height: 16.0,
        ),
        SizedBox(
          height: 248.0,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.zero,
            children: const [
              SizedBox(
                width: 12.0,
              ),
              CIAgentWindowWidget(),
              SizedBox(
                width: 12.0,
              ),
              CIAgentWindowWidget(),
              SizedBox(
                width: 12.0,
              ),
            ],
          ),
        ),
      ],
    );
  }
}

