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
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function ContactPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary.contact.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.contact.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
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
                      <Input id="subject" placeholder="How can we help you?" />
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
      </section>
    </I18nProvider>
  );
}
