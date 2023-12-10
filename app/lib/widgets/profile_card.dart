import 'package:app/models/user_model.dart';
import 'package:app/utils/get_initials.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class ProfileCard extends StatelessWidget {
  final UserModel userModel;
  const ProfileCard({
    super.key,
    required this.userModel,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 8.0),
          child: SizedBox(
            height: 216.0,
            width: double.infinity,
            child: Card(
              elevation: 1.0,
              color: Colors.white,
              surfaceTintColor: Colors.white,
              margin: const EdgeInsets.symmetric(horizontal: 16.0),
              shape: RoundedRectangleBorder(
                side: const BorderSide(color: Color(0xFFE2E2E2), width: 1),
                borderRadius: BorderRadius.circular(12.0),
              ),
              child: Column(
                children: [
                  Row(
                    children: [
                      const SizedBox(
                        width: 92.0,
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(
                            height: 12.0,
                          ),
                          Text(userModel.name,
                              style: const TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w600,
                                fontSize: 16.0,
                                color: Colors.black,
                              )),
                          Text('@${userModel.username}',
                              style: const TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w400,
                                fontSize: 12.0,
                                color: Color(0xFF595D62),
                              )),
                        ],
                      ),
                      const Spacer(),
                      MoonTextButton(
                        onTap: () {},
                        height: 24.0,
                        label: const Text('Edit',
                            style: TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w600,
                              fontSize: 12.0,
                              color: Color(0xFF4E46B4),
                            )),
                        leading: SvgPicture.asset(
                          'assets/edit_icon.svg',
                          color: const Color(0xFF4E46B4),
                          width: 16.0,
                        ),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(4.0),
                          color: const Color(0xFFE9E8F6),
                        ),
                      ),
                      const SizedBox(
                        width: 16.0,
                      ),
                    ],
                  ),
                  const SizedBox(
                    height: 16.0,
                  ),
                  if (userModel.position != null)
                    Row(
                      children: [
                        const SizedBox(
                          width: 16.0,
                        ),
                        SvgPicture.asset(
                          'assets/work_icon.svg',
                          width: 16.0,
                          color: const Color(0xFF595D62),
                        ),
                        const SizedBox(
                          width: 4.0,
                        ),
                        Text(
                          userModel.position!,
                          style: const TextStyle(
                            fontFamily: "DMSans",
                            fontWeight: FontWeight.w400,
                            fontSize: 14.0,
                            color: Colors.black,
                          ),
                        ),
                      ],
                    ),
                  if (userModel.position != null)
                    const SizedBox(
                      height: 4.0,
                    ),
                  if (userModel.college != null)
                    Row(
                      children: [
                        const SizedBox(
                          width: 16.0,
                        ),
                        SvgPicture.asset(
                          'assets/school_icon.svg',
                          width: 16.0,
                          color: const Color(0xFF595D62),
                        ),
                        const SizedBox(
                          width: 4.0,
                        ),
                        Text(
                          userModel.college!,
                          style: const TextStyle(
                            fontFamily: "DMSans",
                            fontWeight: FontWeight.w400,
                            fontSize: 14.0,
                            color: Colors.black,
                          ),
                        ),
                      ],
                    ),
                  if (userModel.college != null)
                    const SizedBox(
                      height: 16.0,
                    ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Container(
                      height: 1.0,
                      width: double.infinity,
                      color: const Color(0xFFE2E2E2),
                    ),
                  ),
                  const SizedBox(
                    height: 16.0,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "Tier Info",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontWeight: FontWeight.w500,
                                  fontSize: 12.0,
                                  color: Color(0xFF595D62),
                                ),
                              ),
                              const SizedBox(
                                height: 4.0,
                              ),
                              Row(
                                children: [
                                  Image.asset(
                                    "assets/pioneer.png",
                                    height: 24.0,
                                  ),
                                  const SizedBox(
                                    width: 8.0,
                                  ),
                                  const Text(
                                    "Pioneer",
                                    style: TextStyle(
                                      fontFamily: "DMSans",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14.0,
                                      color: Colors.black,
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "Sparks",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontWeight: FontWeight.w500,
                                  fontSize: 12.0,
                                  color: Color(0xFF595D62),
                                ),
                              ),
                              const SizedBox(
                                height: 4.0,
                              ),
                              Row(
                                children: [
                                  Image.asset(
                                    "assets/bolt.png",
                                    height: 24.0,
                                  ),
                                  const SizedBox(
                                    width: 8.0,
                                  ),
                                  Text(
                                    "${userModel.sparks} Sparks",
                                    style: const TextStyle(
                                      fontFamily: "DMSans",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14.0,
                                      color: Colors.black,
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(left: 32.0),
          child: Container(
            height: 64.0,
            width: 64.0,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: const BorderRadius.all(Radius.circular(64.0)),
              border: Border.all(color: Colors.white, width: 4.0),
            ),
            child: (userModel.icon != null)
                ? ClipRRect(
                  borderRadius: BorderRadius.circular(48.0),
                  child: CachedNetworkImage(
                      imageUrl: userModel.icon!,
                      fit: BoxFit.cover,
                      width: 64.0,
                      height: 64.0,
                    ),
                )
                : ClipRRect(
                    borderRadius: BorderRadius.circular(48.0),
                    child: Container(
                      height: 64.0,
                      width: 64.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(64.0),
                        color: const Color(0xFFE9E8F6),
                      ),
                      child: Center(
                        child: Text(
                          getInitials(userModel.name),
                          style: const TextStyle(
                            fontFamily: "DMSans",
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF4E46B4),
                          ),
                        ),
                      ),
                    ),
                  ),
          ),
        ),
      ],
    );
  }

}
