import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactFormEmail({
  name = "",
  email = "",
  message = "",
}: ContactFormEmailProps) {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Html>
      <Head />
      <Preview>Nova mensagem de {name} via seu portfólio!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: "#121212",
                foreground: "#555555",
                primary: "#FAFAFA",
                secondary: "#ABABAB",
                "input-background": "#242424",
                accent: "#6E56CF",
              },
            },
          },
        }}
      >
        <Body className="font-sans m-0 p-0 bg-background">
          <Container>
            <div className="my-10">
              <div className="mx-auto border border-solid border-foreground rounded-xl">
                <Section className="rounded-t-xl p-8 pb-6">
                  <Row>
                    <Column>
                      <Text className="text-sm text-accent font-medium uppercase tracking-[2px] m-0">
                        NOVA MENSAGEM
                      </Text>
                      <Heading className="text-3xl text-primary font-bold mt-2 mb-0">
                        Novo contato recebido
                      </Heading>
                    </Column>
                  </Row>
                </Section>

                <Section className="p-8 pt-6">
                  <Text className="text-secondary font-medium mb-6 mt-0">
                    Você recebeu uma nova mensagem do seu portfólio em{" "}
                    <span className="text-primary font-semibold">
                      {currentDate}
                    </span>
                    .
                  </Text>

                  <Section className="py-1 px-4 rounded-lg bg-input-background border border-solid border-foreground">
                    <Row>
                      <Column>
                        <Text className="text-sm text-accent font-medium uppercase tracking-[1px] mb-0">
                          REMETENTE
                        </Text>

                        <Row>
                          <Column>
                            <Text className="text-sm text-secondary font-medium m-0">
                              Nome:
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-lg text-primary font-semibold m-0">
                              {name}
                            </Text>
                          </Column>
                        </Row>

                        <Row>
                          <Column>
                            <Text className="text-sm text-secondary font-medium m-0">
                              Email:
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-lg text-primary font-semibold m-0">
                              {email}
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Row>
                  </Section>

                  <Section className="p-6 rounded-lg border border-solid border-foreground bg-input-background mt-6">
                    <Text className="text-sm text-accent font-medium uppercase tracking-[1px] mb-0">
                      MENSAGEM
                    </Text>
                    <Text className="text-base max-w-md break-words text-primary text-wrap">
                      {message}
                    </Text>
                  </Section>

                  <Section className="text-center bg-[#1B1925] p-6 mt-8 rounded-lg border border-solid border-accent">
                    <Text className="text-base text-primary font-medium">
                      Lembre-se de responder o mais breve possível para manter o
                      engajamento!
                    </Text>
                  </Section>
                </Section>

                <Section className="p-6 rounded-b-xl bg-black">
                  <Text className="text-sm text-primary/60 text-center mt-0 mb-4">
                    Este é um email automático do seu portfólio
                  </Text>

                  <Hr className="my-4 border border-solid border-foreground opacity-50" />

                  <Text className="text-xs text-primary/60 text-center mb-0">
                    © {new Date().getFullYear()} Seu Portfólio • Todos os
                    direitos reservados
                  </Text>
                  <Text className="text-xs text-primary/60 text-center mb-0 mt-2">
                    Desenvolvido com ❤️ para o seu sucesso profissional
                  </Text>
                </Section>
              </div>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
