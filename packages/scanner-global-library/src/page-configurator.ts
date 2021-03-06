// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { injectable } from 'inversify';
import { Page } from 'puppeteer';

@injectable()
export class PageConfigurator {
    private userAgent: string;

    public getUserAgent(): string {
        return this.userAgent;
    }

    public async configurePage(page: Page): Promise<void> {
        await page.setBypassCSP(true);
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
        });

        await this.setUserAgent(page);
    }

    private async setUserAgent(page: Page): Promise<void> {
        const browser = page.browser();
        this.userAgent = (await browser.userAgent()).replace('HeadlessChrome', 'Chrome');
        await page.setUserAgent(this.userAgent);
    }
}
