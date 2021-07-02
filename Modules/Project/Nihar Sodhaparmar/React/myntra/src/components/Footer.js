import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm col-md-6 col-lg-3 p-2">
            <div className="font-weight-bold pb-3">ONLINE SHOPPING</div>
            <div className="footer-links">
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted" to="#">
                    Men
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Women
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Home &#38; Living
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Offers
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Myntra Insider
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm col-md-6 col-lg-3 p-2">
            <div className="font-weight-bold pb-3">USEFUL LINKS</div>
            <div className="footer-links">
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted" to="#">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    T&#38;C
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Track Orders
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Cancellation
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Whitehat
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="#">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm col-md-6 col-lg-3 p-2">
            <div>
              <div className="font-weight-bold pb-3">
                EXPERIENCE MYNTRA APP ON MOBILE
              </div>
              <div className="footer-links">
                <div>
                  <Link to="#">
                    <img
                      src="../../images/get-in-on-google.png"
                      alt=""
                      width="150"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="../../images/download-on-app.png"
                      alt=""
                      width="150"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="font-weight-bold pt-4">KEEP IN TOUCH</div>
              <div className="d-flex flex-row justify-content-start lead footer-links">
                <div className="p-3">
                  <Link to="#">
                    <FaFacebook className="text-muted" />
                  </Link>
                </div>
                <div className="p-3">
                  <Link to="#">
                    <FaTwitter className="text-muted" />
                  </Link>
                </div>
                <div className="p-3">
                  <Link to="#">
                    <FaYoutube className="text-muted" />
                  </Link>
                </div>
                <div className="p-3">
                  <Link to="#">
                    <FaInstagramSquare className="text-muted" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm col-md-6 col-lg-3 p-2">
            <div className="pb-3 text-justify">
              <img
                className="mt-2 float-left"
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt=""
                style={{ width: "48px", height: "40px", marginRight: "7px" }}
              />
              <span className="font-weight-bold">100% ORIGINAL</span>
              <span className="text-muted">
                {" "}
                gaurantee for all products at{" "}
              </span>
              <Link to="/" className="text-muted">
                {" "}
                myntra.com
              </Link>
            </div>
            <div className="pb-3 text-justify">
              <img
                className="mt-1 float-left"
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                alt=""
                style={{ width: "48px", height: "49px", marginRight: "7px" }}
              />
              <span className="font-weight-bold">Returning within 30days</span>
              <span className="text-muted"> of receiving your order</span>
            </div>
            <div className="pb-3 text-justify">
              <img
                className="mt-1 float-left"
                src="https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png"
                alt=""
                style={{ width: "48px", height: "43px", marginRight: "7px" }}
              />
              <span className="font-weight-bold">Get free delivery</span>
              <span className="text-muted"> for every order above Rs. 799</span>
            </div>
          </div>
        </div>

        {/* <div className="border-top py-2 mb-4">
          <div className="">
            <div className="font-weight-bold pt-4">
              REGISTERED OFFICE ADDRESS
            </div>
            <div className="text-muted mt-2">
              <div>Buildings Alyssa,</div>
              <div>Begonia and Clover situated in Embassy Tech Village,</div>
              <div>Outer Ring Road,</div>
              <div>Devarabeesanahalli Village,</div>
              <div>Varthur Hobli,</div>
              <div>Bengaluru – 560103, India</div>
            </div>
          </div>
        </div>

        <div className="border-top pt-2 mb-4">
          <div className="">
            <div className="font-weight-bold pt-4">
              ONLINE SHOPPING MADE EASY AT MYNTRA
            </div>
            <div className="text-muted mt-2 text-justify">
              If you would like to experience the best of online shopping for
              men, women and kids in India, you are at the right place. Myntra
              is the ultimate destination for fashion and lifestyle, being host
              to a wide array of merchandise including clothing, footwear,
              accessories, jewellery, personal care products and more. It is
              time to redefine your style statement with our treasure-trove of
              trendy items. Our online store brings you the latest in designer
              products straight out of fashion houses. You can shop online at
              Myntra from the comfort of your home and get your favourites
              delivered right to your doorstep.
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="">
            <div className="font-weight-bold pt-2">
              BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
            </div>
            <div className="text-muted mt-2 text-justify">
              Be it clothing, footwear or accessories, Myntra offers you the
              ideal combination of fashion and functionality for men, women and
              kids. You will realise that the sky is the limit when it comes to
              the types of outfits that you can purchase for different
              occasions.
            </div>

            <ol className="text-muted text-justify">
              <li className="m-2">
                <span className="text-dark font-weight-bold">
                  Smart men’s clothing -
                </span>
                At Myntra you will find myriad options in smart formal shirts
                and trousers, cool T-shirts and jeans, or kurta and pyjama
                combinations for men. Wear your attitude with printed T-shirts.
                Create the back-to-campus vibe with varsity T-shirts and
                distressed jeans. Be it gingham, buffalo, or window-pane style,
                checked shirts are unbeatably smart. Team them up with chinos,
                cuffed jeans or cropped trousers for a smart casual look. Opt
                for a stylish layered look with biker jackets. Head out in
                cloudy weather with courage in water-resistant jackets. Browse
                through our innerwear section to find supportive garments which
                would keep you confident in any outfit.
              </li>
              <li className="m-2">
                <span className="text-dark font-weight-bold">
                  Trendy women’s clothing -
                </span>
                Online shopping for women at Myntra is a mood-elevating
                experience. Look hip and stay comfortable with chinos and
                printed shorts this summer. Look hot on your date dressed in a
                little black dress, or opt for red dresses for a sassy vibe.
                Striped dresses and T-shirts represent the classic spirit of
                nautical fashion. Choose your favourites from among Bardot,
                off-shoulder, shirt-style, blouson, embroidered and peplum tops,
                to name a few. Team them up with skinny-fit jeans, skirts or
                palazzos. Kurtis and jeans make the perfect fusion-wear
                combination for the cool urbanite. Our grand sarees and
                lehenga-choli selections are perfect to make an impression at
                big social events such as weddings. Our salwar-kameez sets,
                kurtas and Patiala suits make comfortable options for regular
                wear.
              </li>
              <li className="m-2">
                <span className="text-dark font-weight-bold">
                  Fashionable footwear -
                </span>
                While clothes maketh the man, the type of footwear you wear
                reflects your personality. We bring you an exhaustive lineup of
                options in casual shoes for men, such as sneakers and loafers.
                Make a power statement at work dressed in brogues and oxfords.
                Practice for your marathon with running shoes for men and women.
                Choose shoes for individual games such as tennis, football,
                basketball, and the like. Or step into the casual style and
                comfort offered by sandals, sliders, and flip-flops. Explore our
                lineup of fashionable footwear for ladies, including pumps,
                heeled boots, wedge-heels, and pencil-heels. Or enjoy the best
                of comfort and style with embellished and metallic flats.
              </li>
              <li className="m-2">
                <span className="text-dark font-weight-bold">
                  Stylish accessories -
                </span>
                Myntra is one of the best online shopping sites for classy
                accessories that perfectly complement your outfits. You can
                select smart analogue or digital watches and match them up with
                belts and ties. Pick up spacious bags, backpacks, and wallets to
                store your essentials in style. Whether you prefer minimal
                jewellery or grand and sparkling pieces, our online jewellery
                collection offers you many impressive options.
              </li>
              <li className="m-2">
                <span className="text-dark font-weight-bold">
                  Fun and frolic -
                </span>
                Online shopping for kids at Myntra is a complete joy. Your
                little princess is going to love the wide variety of pretty
                dresses, ballerina shoes, headbands and clips. Delight your son
                by picking up sports shoes, superhero T-shirts, football jerseys
                and much more from our online store. Check out our lineup of
                toys with which you can create memories to cherish.
              </li>
              <li className="m-2">
                <span className="text-dark font-weight-bold">
                  Beauty begins here -
                </span>
                You can also refresh, rejuvenate and reveal beautiful skin with
                personal care, beauty and grooming products from Myntra. Our
                soaps, shower gels, skin care creams, lotions and other
                ayurvedic products are specially formulated to reduce the effect
                of aging and offer the ideal cleansing experience. Keep your
                scalp clean and your hair uber-stylish with shampoos and hair
                care products. Choose makeup to enhance your natural beauty.
              </li>
            </ol>
            <div className="text-muted mt-2 text-justify">
              Myntra is one of the best online shopping sites in India which
              could help transform your living spaces completely. Add colour and
              personality to your bedrooms with bed linen and curtains. Use
              smart tableware to impress your guest. Wall decor, clocks, photo
              frames and artificial plants are sure to breathe life into any
              corner of your home.
            </div>

            <div className="font-weight-bold pt-4">
              AFFORDABLE FASHION AT YOUR FINGERTIPS
            </div>
            <div className="text-muted mt-2 text-justify">
              Myntra is one of the unique online shopping sites in India where
              fashion is accessible to all. Check out our new arrivals to view
              the latest designer clothing, footwear and accessories in the
              market. You can get your hands on the trendiest style every season
              in western wear. You can also avail the best of ethnic fashion
              during all Indian festive occasions. You are sure to be impressed
              with our seasonal discounts on footwear, trousers, shirts,
              backpacks and more. The end-of-season sale is the ultimate
              experience when fashion gets unbelievably affordable.
            </div>

            <div className="font-weight-bold pt-4">MYNTRA INSIDER</div>
            <div className="text-muted mt-2 text-justify">
              Every online shopping experience is precious. Hence, a cashless
              reward-based customer loyalty program called Myntra Insider was
              introduced to enhance your online experience. The program is
              applicable to every registered customer and measures rewards in
              the form of Insider Points.
            </div>
            <div className="text-muted mt-2 text-justify">
              There are four levels to achieve in the program, as the Insider
              Points accumulate. They are - Insider, Select, Elite or Icon.
              Apart from offering discounts on Myntra and partner platform
              coupons, each tier comes with its own special perks.
            </div>
            <div>
              <ul className="list-unstyled text-justify">
                <li>
                  <div className="font-weight-bold mt-2">Insider</div>
                  <ul className="text-muted">
                    <li>
                      Opportunity to master any domain in fashion with tips from
                      celebrity stylists at Myntra Masterclass sessions.
                    </li>
                    <li>Curated collections from celeb stylists.</li>
                  </ul>
                </li>
                <li>
                  <div className="font-weight-bold mt-2 text-justify">
                    Elite
                  </div>
                  <ul className="text-muted">
                    <li>
                      VIP access to special sale events such as the End of
                      Reason Sale (EORS) and product launches.
                    </li>
                    <li>Exclusive early access to Limited Edition products</li>
                  </ul>
                </li>
                <li>
                  <div className="font-weight-bold mt-2 text-justify">Icon</div>
                  <ul className="text-muted">
                    <li>Chance to get on guest lists for special events.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="font-weight-bold pt-4">
              Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To
              Miss Out On
            </div>
            <div className="text-muted mt-2 text-justify">
              The world wide web is evolving at a relentless pace, and with an
              accelerated growth each passing year, there is bound to be an
              overwhelming surge of online content. It was for this very reason
              that personalisation of search feeds was proposed as a solution to
              combat the overload of irrelevant information.
            </div>
            <div className="text-muted mt-2 text-justify">
              Several social media platforms such as Facebook and Instagram
              along with various online shopping websites have chosen to help
              filter content, increasing user engagement, retention and customer
              loyalty.
            </div>
            <div className="text-muted mt-2 text-justify">
              Myntra is one such online shopping website that joins the list of
              platforms that help curate a personalised fashion feed. Named
              theMyntra Studio, this personalised search feed brings you the
              latest men and women’s fashion trends, celebrity styles, branded
              content and daily updates from your favourite fashion labels.
            </div>
            <div className="text-muted mt-2 text-justify">
              If you are wondering how impactful Myntra Studio can be, we are
              listing out five perks of having a rich, meaningful, and
              personalised fashion feed in your life.
            </div>

            <ol className="text-muted text-justify">
              <li className="m-2">
                <div className="text-dark font-weight-bold mb-1">
                  Keep Up With What Your Favourite Fashion Icons Are Upto
                </div>
                <div>
                  The #OOTD, AKA outfit of the day hashtag trend has been a rage
                  among fashion bloggers and stylists. The whole concept of
                  building an outfit from scratch and showcasing it to a huge
                  community of enthusiasts using the hashtag has helped
                  individuals with understanding trends and making suitable for
                  daily wear.
                </div>
                <div className="mt-1">
                  Imagine if you could keep up with every piece of clothing and
                  accessory worn by the fashion icons you look upto. From Sonam
                  Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’
                  feature to help track celebrity fashion trends, exploring
                  details such as their outfit of the day. This way, you would
                  not ever miss out on the latest celebrity fashion trends, from
                  all around the world.
                </div>
              </li>

              <li className="m-2">
                <div className="text-dark font-weight-bold mb-1">
                  Quick Fashion Tip And Tricks
                </div>
                <div>
                  Whether it is draping a saree into a dhoti style, wearing the
                  right lingerie under certain dresses or discovering multiple
                  uses out of heavy ethnic wear, Myntra Studio will help you
                  acquire some unique and useful fashion hacks. Each hack is
                  designed with the intention to help you get the best wear out
                  of everything in your wardrobe.
                </div>
              </li>

              <li className="m-2">
                <div className="text-dark font-weight-bold mb-1">
                  Updates on What Is Trending and New Product Launches
                </div>
                <div>
                  Since fast fashion seems to be extremely hard to keep up with
                  these days, a quick update on what is trending in accessories,
                  clothing and footwear would certainly be of great help. Myntra
                  Studio helps you stay connected to the most beloved and sought
                  after brands such as Puma, Coverstory, The Label Life and so
                  many more.
                </div>
                <div className="mt-1">
                  Your feed keeps you updated with stories of what the brands
                  are creating including clothing, footwear and jewellery, along
                  with their new seasonal collections.
                </div>
              </li>

              <li className="m-2">
                <div className="text-dark font-weight-bold mb-1">
                  Explicit Step-By-Step Beauty Routines From Experts
                </div>
                <div>
                  Just like fashion, the beauty community keeps on growing, and
                  with brands such as Huda Beauty, MAC and the latest Kay Beauty
                  by Katrina Kaif, are constantly coming up with mind-blowing
                  products. Whether it is creating a no-makeup look, different
                  winged eyeliners, do-it-yourself facial masks and other
                  personal care beauty routines, Myntra Studio is here for you.
                </div>
              </li>

              <li className="m-2">
                <div className="text-dark font-weight-bold mb-1">
                  Celebrity Confessions And A Look Into Their Lives
                </div>
                <div>
                  A bonus feature that Myntra Studio has in store for you is
                  celebrity confessions and a peek into their lives. So, Myntra
                  helps you stay connected to your most beloved celebrities in a
                  matter of clicks.
                </div>
                <div className="mt-1">
                  If you are very particular when it comes to the content you
                  wish to view and engage with on social media, the ability to
                  intricately filter content helps achieve that. Applying the
                  same formula for hardcore fashion lovers and shoppers, Myntra
                  Studio brings you a daily fashion fix incorporating everything
                  that you love, all at one place. Sign up on Myntra today and
                  start organising your fashion feed, just the way you want to.
                </div>
              </li>
            </ol>

            <div className="font-weight-bold pt-4">MYNTRA APP</div>
            <div className="text-muted mt-2 text-justify">
              Myntra, India’s no. 1 online fashion destination justifies its
              fashion relevance by bringing something new and chic to the table
              on the daily. Fashion trends seem to change at lightning speed,
              yet the Myntra shopping app has managed to keep up without any
              hiccups. In addition, Myntra has vowed to serve customers to the
              best of its ability by introducing its first-ever loyalty program,
              The Myntra Insider. Gain access to priority delivery, early sales,
              lucrative deals and other special perks on all your shopping with
              the Myntra app. Download the Myntra app on your Android or IOS
              device today and experience shopping like never before!
            </div>

            <div className="font-weight-bold pt-4">HISTORY OF MYNTRA</div>
            <div className="text-muted mt-2 text-justify">
              Becoming India’s no. 1 fashion destination is not an easy feat.
              Sincere efforts, digital enhancements and a team of dedicated
              personnel with an equally loyal customer base have made Myntra the
              online platform that it is today. The original B2B venture for
              personalized gifts was conceived in 2007 but transitioned into a
              full-fledged ecommerce giant within a span of just a few years. By
              2012, Myntra had introduced 350 Indian and international brands to
              its platform, and this has only grown in number each passing year.
              Today Myntra sits on top of the online fashion game with an
              astounding social media following, a loyalty program dedicated to
              its customers, and tempting, hard-to-say-no-to deals.
            </div>
            <div className="text-muted mt-2 text-justify">
              The Myntra shopping app came into existence in the year 2015 to
              further encourage customers’ shopping sprees. Download the app on
              your Android or IOS device this very minute to experience fashion
              like never before
            </div>

            <div className="font-weight-bold pt-4">
              SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
            </div>
            <div className="text-muted mt-2 text-justify">
              Another reason why Myntra is the best of all online stores is the
              complete convenience that it offers. You can view your favourite
              brands with price options for different products in one place. A
              user-friendly interface will guide you through your selection
              process. Comprehensive size charts, product information and
              high-resolution images help you make the best buying decisions.
              You also have the freedom to choose your payment options, be it
              card or cash-on-delivery. The 30-day returns policy gives you more
              power as a buyer. Additionally, the try-and-buy option for select
              products takes customer-friendliness to the next level.
            </div>
            <div className="text-muted mt-2 text-justify">
              Enjoy the hassle-free experience as you shop comfortably from your
              home or your workplace. You can also shop for your friends, family
              and loved-ones and avail our gift services for special occasions.
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
