import { BloomBackground } from '@/components/BloomBackground';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { profile, socialLinks, type SocialLink } from '@/content/site';

const icons: Record<SocialLink['icon'], typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden text-center">
      <BloomBackground />
      <div className="relative z-10">
        <p className="text-foreground mb-[9px] text-[clamp(1.15rem,2.1vw,1.65rem)] font-semibold tracking-[-0.005em]">
          {profile.name}
        </p>
        <p className="text-foreground-muted mb-[26px] text-[12.5px] font-medium tracking-[0.08em] uppercase">
          {profile.location}
        </p>
        <div className="flex justify-center gap-[18px]">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                aria-label={link.label}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#4a474e] transition-colors hover:bg-[#edf4fb] hover:text-[#4a6fa5]"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
