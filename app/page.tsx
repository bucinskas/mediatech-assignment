import { Header } from './components/Header'
import { InfoSection } from "./components";
import { Hero } from "./components/hero/Hero";
import { FiftyFifty } from "./components/FiftyFifty";

export default function Home() {
  return (
    <div>
      <main>
        <Header/>
        <InfoSection text="<p>Our readers help us create quality content. If you purchase via links on our site, we may receive affiliate commissions. <strong>Learn more</strong></p>"/>
        <Hero heading="Generate strong passwords" description="Upgrade the security of your online accounts. " secondaryDescription="Create strong passwords that are completely random and impossible to guess."/>
        <FiftyFifty title="What is a password generator?" image="/laptop.png" alt="Picture of a laptop" description="<p>A password generator is a tool that automatically generates strong, secure passwords. With its help, you don’t need to come up with your own passwords ever again.</p><p>A single mouse click will generate you a sequence of random symbols. Copy and use it as a password for your device, email, social media account, or anything else that requires restricted access.</p><p>Also, don’t use the same password for more than one account. Each time you need to sign up, create a new password using this free password generator. In this way, your data will be safer than ever before.</p>"/>
        <FiftyFifty title="How does our password generator tool work?" image="/strength.png" inverted={true} alt="Picture of a password strenght" description="<p>To create a truly unique character combination, this online password generator tool goes through random sequences of 26 uppercase letters, 26 lowercase letters, 10 numeric digits, and 32 special symbols. The result is a unique 12-character sequence. This number of characters makes your future password downright unbreakable, taking 1.4 billion years for a brute-force attack to crack it.</p><p>This free password generator is compatible with Windows, Linux, and Mac operating systems, as well as with Android and iOS devices.</p>"/>
      </main>
    </div>
  );
}
