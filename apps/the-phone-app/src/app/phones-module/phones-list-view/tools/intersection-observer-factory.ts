export class IntersectionObserverFactory {
  private static intersectionObserverArray: IntersectionObserver[] = [];
  public static getIntersectionObserver(callback: () => void, waitForPage: boolean): IntersectionObserver {
    const intersectionObserverArray = IntersectionObserverFactory.intersectionObserverArray;
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    if (intersectionObserverArray.length) {
      intersectionObserverArray[0].disconnect();
      intersectionObserverArray.shift();
    }
    intersectionObserverArray.push(
      new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !waitForPage) {
          callback();
        }
      }, options)
    );
    return intersectionObserverArray[0];
  }
}

