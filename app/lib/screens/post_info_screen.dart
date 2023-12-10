import 'package:app/models/post_model.dart';
import 'package:app/models/user_model.dart';
import 'package:app/utils/app_data_layer.dart';
import 'package:app/widgets/post_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class PostInfoScreen extends StatefulWidget {
  final PostModel post;
  final UserModel? userModel;

  const PostInfoScreen({super.key, required this.post, this.userModel});

  @override
  State<PostInfoScreen> createState() => _PostInfoScreenState();
}

class _PostInfoScreenState extends State<PostInfoScreen> {
  String? _response;
  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const SizedBox(
              height: 55.0,
            ),
            Row(
              children: [
                GestureDetector(
                  onTap: () {
                    Navigator.pop(context);
                  },
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      color: const Color(0xFFDBE8FA),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Row(
                        children: [
                          Icon(
                            Icons.arrow_back_ios_new_rounded,
                            size: 18.0,
                            color: Color(0xFF0578FB),
                          ),
                          SizedBox(
                            width: 8.0,
                          ),
                          Text(
                            'Back',
                            style: TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w600,
                              fontSize: 14.0,
                              color: Color(0xFF0578FB),
                            ),
                          ),
                          SizedBox(
                            width: 4.0,
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 16.0,
            ),
            AnimatedSize(
              duration: const Duration(milliseconds: 500),
              child: Card(
                elevation: 1.0,
                color: Colors.white,
                margin: EdgeInsets.zero,
                surfaceTintColor: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                  side: const BorderSide(
                    color: Color(0xFFE9E8E9),
                    width: 1.0,
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(
                      height: 16.0,
                    ),
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 16.0),
                      child: Text(
                        "Make the most of this post with AI",
                        style: TextStyle(
                          fontFamily: "DMSans",
                          fontWeight: FontWeight.w500,
                          fontSize: 14.0,
                          color: Color(0xFF595D62),
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 8.0,
                    ),
                    Row(
                      children: [
                        const SizedBox(
                          width: 16.0,
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              isLoading = true;
                              _response = null;
                            });
                            _response =
                                await AppDataLayer().createNotes(widget.post);
                            setState(() {
                              isLoading = false;
                            });
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8.0),
                              color: const Color(0xFF0578FB),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Row(
                                children: [
                                  SvgPicture.asset(
                                    "assets/star_icon.svg",
                                    width: 18.0,
                                    height: 18.0,
                                    color: Colors.white,
                                  ),
                                  const SizedBox(
                                    width: 8.0,
                                  ),
                                  const Text(
                                    'Create Notes',
                                    style: TextStyle(
                                      fontFamily: "DMSans",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14.0,
                                      color: Colors.white,
                                    ),
                                  ),
                                  const SizedBox(
                                    width: 4.0,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(
                          width: 8.0,
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              isLoading = true;
                              _response = null;
                            });
                            _response = await AppDataLayer()
                                .summarizeThePost(widget.post);
                            setState(() {
                              isLoading = false;
                            });
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8.0),
                              color: const Color(0xFF0578FB),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Row(
                                children: [
                                  SvgPicture.asset(
                                    "assets/star_icon.svg",
                                    width: 18.0,
                                    height: 18.0,
                                    color: Colors.white,
                                  ),
                                  const SizedBox(
                                    width: 8.0,
                                  ),
                                  const Text(
                                    'Summarize the post',
                                    style: TextStyle(
                                      fontFamily: "DMSans",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14.0,
                                      color: Colors.white,
                                    ),
                                  ),
                                  const SizedBox(
                                    width: 4.0,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 8.0,
                    ),
                    Row(
                      children: [
                        const SizedBox(
                          width: 16.0,
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              isLoading = true;
                              _response = null;
                            });
                            _response =
                                await AppDataLayer().factChecker(widget.post);
                            setState(() {
                              isLoading = false;
                            });
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8.0),
                              color: const Color(0xFF0578FB),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Row(
                                children: [
                                  SvgPicture.asset(
                                    "assets/star_icon.svg",
                                    width: 18.0,
                                    height: 18.0,
                                    color: Colors.white,
                                  ),
                                  const SizedBox(
                                    width: 8.0,
                                  ),
                                  const Text(
                                    'Fact Checker',
                                    style: TextStyle(
                                      fontFamily: "DMSans",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14.0,
                                      color: Colors.white,
                                    ),
                                  ),
                                  const SizedBox(
                                    width: 4.0,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(
                          width: 8.0,
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              isLoading = true;
                              _response = null;
                            });
                            _response =
                                await AppDataLayer().explainTerms(widget.post);
                            setState(() {
                              isLoading = false;
                            });
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8.0),
                              color: const Color(0xFF0578FB),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Row(
                                children: [
                                  SvgPicture.asset(
                                    "assets/star_icon.svg",
                                    width: 18.0,
                                    height: 18.0,
                                    color: Colors.white,
                                  ),
                                  const SizedBox(
                                    width: 8.0,
                                  ),
                                  const Text(
                                    'Explain terms',
                                    style: TextStyle(
                                      fontFamily: "DMSans",
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14.0,
                                      color: Colors.white,
                                    ),
                                  ),
                                  const SizedBox(
                                    width: 4.0,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    if (isLoading) const SizedBox(
                      height: 16.0,
                    ),
                    if (isLoading) const Center(
                      child: Padding(
                        padding: EdgeInsets.all(16.0),
                        child: CircularProgressIndicator(
                          color: Color(0xFF0578FB),
                        ),
                      ),
                    ),
                    if (_response != null)
                      const SizedBox(
                        height: 16.0,
                      ),
                    if (_response != null)
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Text(
                          _response!,
                          style: const TextStyle(
                            fontFamily: "DMSans",
                            fontWeight: FontWeight.w500,
                            fontSize: 14.0,
                            color: Color(0xFF595D62),
                          ),
                        ),
                      ),
                    const SizedBox(
                      height: 16.0,
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(
              height: 16.0,
            ),
            PostWidget(
              post: widget.post,
              userModel: widget.userModel,
              isExpanded: true,
            ),
            const SizedBox(
              height: 50.0,
            ),
          ],
        ),
      ),
    );
  }
}
