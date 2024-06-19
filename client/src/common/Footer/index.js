import React from "react";
import { CardFooter, Col, Container, Row } from "react-bootstrap";
import { Button } from 'primereact/button';

const Footer = () => {
  const iconList = [
    { id: 0, icon: "pi pi-facebook", severity: "info", ariaLabel: "fb", link: "https://www.facebook.com/" },
    { id: 1, icon: "pi pi-instagram", severity: "danger", ariaLabel: "insta", link: "https://www.instagram.com/" },
    { id: 2, icon: "pi pi-linkedin", severity: "info", ariaLabel: "ld", link: "https://www.linkedin.com/feed/" },
    { id: 3, icon: "pi pi-github", severity: "secondary", ariaLabel: "gh", link: "https://github.com/" }
  ];

  const linkList = [
    { id: 0, label: "Home", link: "/home" },
    { id: 1, label: "Customers", link: "/customers/*" },
    { id: 2, label: "Farmers", link: "/farmers/*" },
    { id: 3, label: "Register", link: "/register" },
    { id: 4, label: "Stall Bookings", link: "/farmers/stallplaces" },
    { id: 5, label: "Terms and Conditions", link: "/terms" },
  ];

  const firstRowLinks = linkList.slice(0, 4);
  const secondRowLinks = linkList.slice(4);

  return (
    <>
      <CardFooter className="p-2 w-full" style={{ background: "linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)" }}>
        <Container fluid className="text-sm py-3">
          <Row  >
            <Col md={5} className="flex justify-content-center md:justify-content-start ">
              <div className=" text-center text-red-600 w-full"  >
                <div>
                  <h3 className=" text-3xl font-bold">Wingrow Agritech </h3>
                  <h3 className=" text-3xl font-bold">Innovations pvt Ltd</h3>
                </div>
                <div className="text-center ">
                  <ul className="list-none flex gap-4">
                    {firstRowLinks.map((item) => (
                      <li key={item.id} className="text-white text-wrap text-xs">
                        {item.label}
                      </li>
                    ))}
                  </ul>
                  <ul className="list-none flex gap-4 mt-2 ml-4">
                    {secondRowLinks.map((item) => (
                      <li key={item.id} className="text-white text-wrap text-xs">
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-black ">Wingrow Agritech.  All rights reserved.</p>
              </div>
            </Col>
            <Col md={3} className="flex justify-content-center">
              <div className="text-center">
                <p className="text-white"><span>Wingrow Agritech Innovations Pvt. Ltd </span> Office no.208, Times Square building, Pune satara road, Pune 411037</p>
                <Button label="+91 777 600 3700" icon="pi pi-phone" className="bg-transparent border-0" rounded onClick={() => window.open('https://react.dev', '_blank')} />
                <Button label="connect@wingrowagritech.com" icon="pi pi-envelope" className="bg-transparent text-black border-0" rounded onClick={() => window.open('https://react.dev', '_blank')} />
                <p><a pi-envelope href="mailto:support@company.com"></a></p>
              </div>
            </Col>

            <Col md={3} className="flex justify-content-center md:justify-content-end">
              <div>
                <p className="text-white text-center">About the company</p>
                <p className="text-center text-black">
                  We at Wingrow Agritech facilitate direct interaction between consumers and farmers. Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.
                </p>
                <div className="text-center flex justify-content-center gap-2">
                  {iconList.map(icon => (
                    <Button
                      key={icon.id}
                      icon={icon.icon}
                      onClick={() => window.open(icon.link, '_blank')}
                      className="bg-white border-round-md border-2"
                      outlined
                      raised
                      severity={icon.severity}
                      aria-label={icon.ariaLabel}
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </CardFooter>
    </>
  );
};

export default Footer;
