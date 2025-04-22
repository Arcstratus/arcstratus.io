import { I18nProvider } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Textarea } from "@/components/shadcn/textarea";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import {
  IconAward,
  IconBulb,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function AboutPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  const values = [
    {
      icon: <IconBulb className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value1.title,
      description: dictionary.about.values.value1.description,
    },
    {
      icon: <IconAward className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value2.title,
      description: dictionary.about.values.value2.description,
    },
    {
      icon: <IconUsers className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value3.title,
      description: dictionary.about.values.value3.description,
    },
    {
      icon: <IconShieldCheck className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value4.title,
      description: dictionary.about.values.value4.description,
    },
  ];

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary.about.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                {dictionary.about.mission.title}
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.mission.description}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                {dictionary.about.vision.title}
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {dictionary.about.values.title}
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {dictionary.about.team.title}
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.team.subtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Team members would go here - using placeholders for now */}
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 rounded-full bg-muted"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Team Member {index + 1}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Position
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {dictionary.contact.title}
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.contact.subtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{dictionary.contact.info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <IconMapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {dictionary.contact.info.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <IconMail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {dictionary.contact.info.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <IconPhone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {dictionary.contact.info.phone}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="aspect-video overflow-hidden rounded-lg">
                  {/* Placeholder for a map */}
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Map Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{dictionary.contact.title}</CardTitle>
                    <CardDescription>
                      {dictionary.contact.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {dictionary.contact.form.name}
                        </Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {dictionary.contact.form.email}
                        </Label>
                        <Input
                          id="email"
                          placeholder="john@example.com"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          {dictionary.contact.form.subject}
                        </Label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {dictionary.contact.form.message}
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-32"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        {dictionary.contact.form.submit}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
