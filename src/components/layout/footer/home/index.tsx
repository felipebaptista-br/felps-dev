import { Container, Footer } from "@/components";
import { vs } from "@/version";

const Root = () => {
    return (
        <Footer.Root>
            <Container.AutoWidth style={{ 'height': '100%' }}>
                <Footer.Menu>
                    <Footer.MenuItem variant='column'>
                        <p>1. Intellectual Property: All content on this website, including text, images, graphics, logos, videos, and other materials, are the intellectual property of the developer of this portfolio unless otherwise stated. Unauthorized use or reproduction of this content is prohibited without express permission from the owner.</p>
                        <p>2. Use of Code and Resources: Some projects may contain open-source code or resources available for public use. Usage of these is subject to the individual licenses of each project. Please review and respect the specific terms of use for each resource before using them in your own projects.</p>
                    </Footer.MenuItem>
                    <Footer.MenuItem variant='column'>
                        <p>3. Liability: The developer of this portfolio strives to ensure the accuracy and timeliness of all presented information. However, we are not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the content of this site.</p>
                        <p>4. Changes to Terms and Conditions: We reserve the right to modify these terms and conditions at any time without prior notice. Any changes will take effect immediately upon posting on this website. By continuing to use this site after such changes, you agree to be bound by the updated terms and conditions.</p>
                    </Footer.MenuItem>
                    <Footer.SocialMedia />
                </Footer.Menu>
            </Container.AutoWidth>
            <Footer.Copyright>&copy; {new Date().getFullYear()} Felipe Baptista. All rights reserved. - Version: {vs}</Footer.Copyright>
        </Footer.Root>
    )
};

export { Root };