import 'package:app/models/post_model.dart';
import 'package:app/models/user_model.dart';
import 'package:app/screens/post_info_screen.dart';
import 'package:app/utils/get_initials.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class PostWidget extends StatefulWidget {
  final PostModel post;
  final UserModel userModel;
  final bool isExpanded;
  const PostWidget({
    super.key,
    required this.post,
    required this.userModel,
    this.isExpanded = false,
  });

  @override
  State<PostWidget> createState() => _PostWidgetState();
}

class _PostWidgetState extends State<PostWidget> {

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.of(context).push(
          PageRouteBuilder(
            transitionDuration: const Duration(milliseconds: 500),
            reverseTransitionDuration: const Duration(milliseconds: 500),
            pageBuilder: (_, __, ___) {
              return PostInfoScreen(
                post: widget.post,
                userModel: widget.userModel,
              );
            },
          ),
        );
      },
      child: Ink(
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
              Row(
                children: [
                  const SizedBox(
                    width: 16.0,
                  ),
                  (widget.userModel.icon != null)
                      ? Hero(
                        tag: "icon${widget.post.id}",
                        child: Material(
                          color: Colors.transparent,
                          child: ClipRRect(
                              borderRadius: BorderRadius.circular(46.0),
                              child: CachedNetworkImage(
                                imageUrl: widget.userModel.icon!,
                                height: 46.0,
                                width: 46.0,
                                fit: BoxFit.cover,
                              ),
                            ),
                        ),
                      )
                      : Hero(
                        tag: "icon${widget.post.id}",
                        child: Material(
                          color: Colors.transparent,
                          child: ClipRRect(
                              borderRadius: BorderRadius.circular(46.0),
                              child: Container(
                                height: 46.0,
                                width: 46.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(46.0),
                                  color: const Color(0xFFDBE8FA),
                                ),
                                child: Center(
                                  child: Text(
                                    getInitials(widget.userModel.name),
                                    style: const TextStyle(
                                      fontFamily: "DMSans",
                                      fontSize: 16,
                                      fontWeight: FontWeight.w600,
                                      color: Color(0xFF0578FB),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                        ),
                      ),
                  const SizedBox(
                    width: 12.0,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Hero(
                        tag: "name${widget.post.id}",
                        child: Material(
                          color: Colors.transparent,
                          child: Text(
                            widget.userModel.name,
                            style: const TextStyle(
                              fontFamily: "DMSans",
                              fontSize: 16,
                              fontWeight: FontWeight.w600,
                              color: Colors.black,
                            ),
                          ),
                        ),
                      ),
                      Hero(
                        tag: "college${widget.post.id}",
                        child: Material(
                          color: Colors.transparent,
                          child: Text(
                            widget.userModel.position!,
                            style: const TextStyle(
                              fontFamily: "DMSans",
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: Color(0xFF595D62),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(
                height: 16.0,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Hero(
                  tag: "content${widget.post.id}",
                  child: Material(
                    color: Colors.transparent,
                    child: Text(
                      (widget.post.stringContent ?? "Loading"),
                      style: const TextStyle(
                        fontFamily: "DMSans",
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                        color: Color(0xFF595D62),
                      ),
                      maxLines: (widget.isExpanded ? 1000 : 7),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ),
              ),
              if (widget.post.coverImage != null)
                const SizedBox(
                  height: 16.0,
                ),
              if (widget.post.coverImage != null)
                Hero(
                  tag: "coverImage${widget.post.id}",
                  child: Material(
                    color: Colors.transparent,
                    child: Center(
                      child: CachedNetworkImage(
                        imageUrl: widget.post.coverImage!,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
              const SizedBox(
                height: 16.0,
              ),
              Row(
                children: [
                  const SizedBox(
                    width: 8.0,
                  ),
                  Expanded(
                    child: InkWell(
                      onTap: () {},
                      child: Ink(
                        child: Hero(
                          tag: "like${widget.post.id}",
                          child: Material(
                            color: Colors.transparent,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8.0),
                                color: const Color(0xFFDBE8FA),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      SvgPicture.asset(
                                        "assets/like_icon.svg",
                                      ),
                                      const SizedBox(
                                        width: 4.0,
                                      ),
                                      Text(
                                        "${widget.post.likes}",
                                        style: const TextStyle(
                                          fontFamily: "DMSans",
                                          fontSize: 12,
                                          fontWeight: FontWeight.w600,
                                          color: Color(0xFF0578FB),
                                        ),
                                      ),
                                    ]),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Expanded(
                    child: InkWell(
                      onTap: () {},
                      child: Ink(
                        child: Hero(
                          tag: "comment${widget.post.id}",
                          child: Material(
                            color: Colors.transparent,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8.0),
                                color: const Color(0xFFDBE8FA),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      SvgPicture.asset(
                                        "assets/comment_icon.svg",
                                      ),
                                      const SizedBox(
                                        width: 4.0,
                                      ),
                                      const Text(
                                        "257",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontSize: 12,
                                          fontWeight: FontWeight.w600,
                                          color: Color(0xFF0578FB),
                                        ),
                                      ),
                                    ]),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Expanded(
                    child: InkWell(
                      onTap: () {},
                      child: Ink(
                        child: Hero(
                          tag: "repost${widget.post.id}",
                          child: Material(
                            color: Colors.transparent,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8.0),
                                color: const Color(0xFFDBE8FA),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      SvgPicture.asset(
                                        "assets/repost_icon.svg",
                                      ),
                                      const SizedBox(
                                        width: 4.0,
                                      ),
                                      const Text(
                                        "32",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontSize: 12,
                                          fontWeight: FontWeight.w600,
                                          color: Color(0xFF0578FB),
                                        ),
                                      ),
                                    ]),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Expanded(
                    child: InkWell(
                      onTap: () {},
                      child: Ink(
                        child: Hero(
                          tag: "share${widget.post.id}",
                          child: Material(
                            color: Colors.transparent,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8.0),
                                color: const Color(0xFFDBE8FA),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      SvgPicture.asset(
                                        "assets/share_post_icon.svg",
                                      ),
                                      const SizedBox(
                                        width: 4.0,
                                      ),
                                      const Text(
                                        "473",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontSize: 12,
                                          fontWeight: FontWeight.w600,
                                          color: Color(0xFF0578FB),
                                        ),
                                      ),
                                    ]),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                ],
              ),
              const SizedBox(
                height: 16.0,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
