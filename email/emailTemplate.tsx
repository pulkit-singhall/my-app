import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
} from '@react-email/components';

export default function EmailTEmplate(name: string, email: string, content: string) {
    return (
        <Html lang='en' dir='ltr'>
            <Head>
                <title>
                    <b>Response Collected</b>
                </title>
            </Head>
            <Preview>
                Thanks for your valuable message.
            </Preview>
            <Section className='m-1 p-1'>
                <Row className='m-1'>
                    <Heading as="h2">Hello {name},</Heading>
                </Row>
                <Row className='m-1'>
                    <Text>
                        Thank you for taking out time to visit my Portfolio.
                        Rest assured that I review all the
                        messages I receive, and I will take your comments into
                        consideration as I continue to make enhancements to
                        my website.
                    </Text>
                </Row>
                <Row className='m-1'>
                    <Text>
                        Once again, thank you for your valuable input. If you
                        have any further feedback or questions, please don&apos;t
                        hesitate to reach out to me.
                    </Text>
                </Row>
                <Row className='m-1'>
                    <Text>
                        If you did not fill any response, please ignore this email.
                    </Text>
                </Row>
            </Section>
        </Html>
    )   
}