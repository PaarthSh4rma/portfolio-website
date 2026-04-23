import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";

function App() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <Navbar />

      <Section>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Portfolio v2
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Paarth Sharma
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            Software engineer building reliable full-stack, backend, and cloud-powered
            products.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisl ac mi sollicitudin pretium sit amet vel lectus. Sed erat lorem, rutrum id lacus quis, vehicula blandit sapien. Morbi a vestibulum purus. Etiam tristique erat non neque gravida, sit amet luctus enim gravida. Proin sollicitudin pulvinar viverra. Morbi dictum euismod nunc et ultricies. Nullam quis euismod dolor. Curabitur lacinia eros in purus tincidunt blandit. Fusce laoreet ultricies laoreet. Vestibulum eget ligula a turpis bibendum sollicitudin in quis nunc. Cras sed sem ultrices, sodales eros non, eleifend mauris. In nec condimentum neque. Mauris egestas dui ut mauris bibendum egestas. Quisque ullamcorper lorem nulla. Phasellus sed ullamcorper metus.

Integer lobortis cursus neque eleifend accumsan. Vestibulum vitae enim vel mauris viverra ultrices sagittis et nibh. Nulla imperdiet porta ligula, eu molestie mauris vehicula et. Duis scelerisque nisl quam, at tristique turpis vulputate sit amet. Maecenas eget quam ultricies, laoreet est et, mollis orci. Aliquam in lorem justo. Quisque efficitur placerat quam, vestibulum hendrerit arcu gravida ut. Nam facilisis tortor sit amet orci sodales, ut volutpat augue imperdiet. Etiam hendrerit tortor ac felis suscipit, quis ornare dui suscipit.

Suspendisse dignissim sodales nisl varius sollicitudin. Sed id aliquam nisi. Nullam velit purus, gravida id erat et, mollis aliquet sem. Etiam consectetur tellus consectetur leo ullamcorper efficitur. Aenean fringilla ligula ultricies imperdiet posuere. Duis vel sagittis mi. Mauris eget lectus tincidunt, dignissim ex vel, molestie nisi. Cras blandit, urna nec vehicula sagittis, ex lacus porta dolor, vitae porta nisl nisl in diam. In ac nisl scelerisque, ornare lacus a, maximus eros. Pellentesque molestie arcu sit amet arcu ornare consequat.

Nulla lobortis tortor nibh, a mollis nunc consequat non. Nunc ultricies mattis odio ut convallis. Vivamus eget rutrum elit, ac cursus felis. Quisque lobortis lacinia bibendum. Phasellus interdum dapibus sem eget semper. Morbi ut dolor justo. In rhoncus nibh vitae semper semper. Sed semper, felis et ornare faucibus, ipsum massa tempus augue, non vestibulum nisl nibh nec orci. Proin rhoncus velit non elit convallis commodo. Aliquam eleifend diam at tellus auctor aliquet. Nulla a nunc sapien. Praesent eget interdum mauris.

Donec nunc sapien, pretium a tortor at, aliquet sagittis purus. Phasellus ac congue ex. Suspendisse nisl arcu, aliquam ut aliquet non, tempus id magna. Suspendisse eget velit mollis, aliquam tortor sit amet, varius justo. Ut nec tellus diam. In a ligula et justo pretium suscipit. In ut ante eget neque molestie pulvinar in id purus. Proin rhoncus ante ut justo cursus feugiat. Maecenas gravida dolor eget nunc elementum tristique. Quisque sollicitudin, lectus quis eleifend interdum, ante massa tempus tortor, in venenatis ante tellus non mi.
          </p>
        </div>
      </Section>
    </main>
  );
}

export default App;