class BadgeModel {
  String id;
  String heading;
  String description;
  String status;
  String image;
  String sparks;

  BadgeModel({
    required this.id,
    required this.heading,
    required this.description,
    required this.status,
    required this.image,
    required this.sparks,
  });

  Map<String, dynamic> toJson() => {
      "_id": id,
      "heading": heading,
      "description": description,
      "status": status,
      "image": image,
      "sparks": sparks,
    };

  factory BadgeModel.fromJson(Map<String, dynamic> json) {
    return BadgeModel(
      id: json["_id"],
      heading: json["heading"] ?? "",
      description: json["description"] ?? "",
      status: json["status"] ?? "",
      image: json["image"] ?? "",
      sparks: json["sparks"] ?? "",
    );
  }
}
