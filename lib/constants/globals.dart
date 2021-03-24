import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Globals{
  static const List<String> menu = [
    "Home", "Services", "References", "Resume", "About Me"
  ];

  static const String contactMe = "Contact Me";
  static const String checkMeOut = "Check Me out";

  static String homeTitle = "My Personal Portfolio";


  static const String facebookPage = "https://www.facebook.com/izeneeszerusztokhej/";
  static Map<String,dynamic> socialMediaBubbles= {
    "Facebook" : [FontAwesomeIcons.facebook, facebookPage],
    "Twitter" : [FontAwesomeIcons.twitter, facebookPage],
    "Instagram" : [ FontAwesomeIcons.instagram, facebookPage],
  };
}