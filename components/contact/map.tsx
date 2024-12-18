"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16930.123456789!2d151.20990000000002!3d-33.868820000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d0b0b0b0b%3A0x0!2sSydney%2C%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1600000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card>
    </motion.div>
  );
}
