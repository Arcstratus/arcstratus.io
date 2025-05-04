"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/shadcn/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconBrandInstagram,
  IconBrandThreads,
  IconBrandX,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "./actions";

const formSchema = z.object({
  name: z.string().min(1, "請輸入姓名"),
  email: z.string().email("請輸入有效的電子郵件"),
  message: z.string().min(1, "請輸入合作意向"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const result = await submitContactForm(data);

    if (result.success) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <main className="container py-8 max-w-6xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h1>聯繫我們</h1>

          {/* 介紹部分 */}
          <section className="mb-8">
            <p className="text-lg text-muted-foreground">
              諾澄科技（Arcstratus）致力於雲端架構、人工智慧、軟體產品與創意發展，期待與企業、初創公司或個人創作者展開跨領域合作。
            </p>
          </section>

          {/* 常見問題 */}
          <section className="mb-12">
            <h2>常見問題</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="start">
                <AccordionTrigger>如何開始合作？</AccordionTrigger>
                <AccordionContent>
                  填寫聯繫表單或透過社群管道聯繫我們，簡述您的需求。我們會安排後續討論，確認合作模式。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="response">
                <AccordionTrigger>聯繫後多久會收到回覆？</AccordionTrigger>
                <AccordionContent>
                  我們會在 3
                  個工作天內回覆您的訊息。若需緊急聯繫，請在表單或訊息中註明。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="proposal">
                <AccordionTrigger>是否需要準備詳細企劃書？</AccordionTrigger>
                <AccordionContent>
                  不需要！簡單描述您的想法或需求即可，我們會進一步與您溝通細節。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* 聯繫表單 */}
        <div className="md:sticky md:top-8">
          <Card>
            <CardHeader>
              <h2>聯繫表單</h2>
              <CardDescription>
                請填寫以下表單，告訴我們您的合作意向。我們會在 3
                個工作天內回覆您。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>姓名</FormLabel>
                        <FormControl>
                          <Input placeholder="您的姓名或公司名稱" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>電子郵件</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="請輸入您的電子郵件"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>合作意向</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="簡述您的項目需求或合作想法"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-end gap-4">
                    <Button type="submit" size="lg">
                      送出
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      備註：表單資料僅用於回覆您的合作意向，不會用於其他目的。
                    </p>
                  </div>
                </form>
              </Form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">
                    或
                  </span>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  您也可以透過以下社群管道與我們聯繫：
                </p>
                <div className="flex justify-center gap-8">
                  <a
                    href="https://threads.net/NuoChengTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Threads"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Threads</span>
                    <IconBrandThreads className="size-8" />
                  </a>
                  <a
                    href="https://x.com/NuoChengTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">X (Twitter)</span>
                    <IconBrandX className="size-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/NuoChengTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <IconBrandInstagram className="size-8" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
